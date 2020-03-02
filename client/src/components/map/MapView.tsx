/** @jsx jsx */
import { useEffect } from 'react'
import { useObserver } from 'mobx-react'
import { css, jsx } from '@emotion/core'
import { Display } from '../Display'
import { message } from 'antd'
import palette from '../../lib/styles/palette'
import './map.css'
import UserDetailStore from '../../stores/UserDetailStore'

declare global {
  interface Window {
    kakao: any
  }
}
let map: any

const MapView = () => {
  useEffect(() => {
    UserDetailStore.mypage()
    const container = document.getElementById('map')
    const option = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    }

    map = new window.kakao.maps.Map(container, option)

    const geocoder = new window.kakao.maps.services.Geocoder()

    geocoder.addressSearch(
      UserDetailStore.data.city + ' ' + UserDetailStore.data.town,
      (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new window.kakao.maps.Marker({
            map,
            position: coords
          })

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new window.kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">설정 위치</div>'
          })
          infowindow.open(map, marker)

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords)

          //searchPlaces();
        }
      }
    )
  }, [])
  // }, [UserDetailStore.data.city, UserDetailStore.data.town])

  let markers: any[] = []

  const ps = new window.kakao.maps.services.Places()
  const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 })

  function searchPlaces(idx: number) {
    if (idx === 1) {
      ps.keywordSearch(
        `${UserDetailStore.data.city} ${UserDetailStore.data.town} 카페`,
        placesSearchCB
      )
    } else {
      ps.keywordSearch(
        `${UserDetailStore.data.city} ${UserDetailStore.data.town} 스터디룸`,
        placesSearchCB
      )
    }
  }

  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  function placesSearchCB(data: any, status: any, pagination: any) {
    if (status === window.kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      displayPlaces(data)

      displayPagination(pagination)
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      message.error('검색 결과가 존재하지 않습니다.')
      return
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      message.error('검색 결과 중 오류가 발생했습니다.')
      return
    }
  }

  // 검색 결과 목록과 마커를 표출하는 함수입니다
  function displayPlaces(places: any) {
    const listEl = document.getElementById('placesList')
    const menuEl = document.getElementById('menu_wrap')
    const fragment = document.createDocumentFragment()
    const bounds = new window.kakao.maps.LatLngBounds()

    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl)

    removeMarker()
    places.forEach((place: any, index: number) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x)
      const marker = addMarker(placePosition, index)
      const itemEl = getListItem(index, place) // 검색 결과 항목 Element를 생성합니다

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(placePosition)
      // 마커와 검색결과 항목에 mouseover 했을때
      // 해당 장소에 인포윈도우에 장소명을 표시합니다
      // mouseout 했을 때는 인포윈도우를 닫습니다
      ;((marker: any, title: any) => {
        window.kakao.maps.event.addListener(marker, 'mouseover', () => {
          displayInfowindow(marker, title)
        })

        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.close()
        })

        itemEl.onmouseover = () => {
          displayInfowindow(marker, title)
        }

        itemEl.onmouseout = () => {
          infowindow.close()
        }
      })(marker, place.place_name)

      fragment.appendChild(itemEl)
    })

    // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
    if (listEl != null) {
      listEl.appendChild(fragment)
    }
    if (menuEl !== null) {
      menuEl.scrollTop = 0
    }

    map.setBounds(bounds)
  }

  // 검색결과 항목을 Element로 반환하는 함수입니다
  function getListItem(index: any, places: any) {
    const el = document.createElement('li')
    let itemStr = `<span class="markerbg marker_${index + 1} 
        "></span>
        <div class="info">
           <h5>
        ${places.place_name} 
        </h5>`

    if (places.road_address_name) {
      itemStr += `    <span>
        ${places.road_address_name}
        </span>
           <span class="jibun gray">
        ${places.address_name}
        </span>`
    } else {
      itemStr += `    <span>${places.address_name}</span>`
    }
    el.innerHTML = itemStr
    el.className = 'item'

    return el
  }

  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  function addMarker(position: any, idx: any) {
    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png' // 마커 이미지 url, 스프라이트 이미지를 씁니다
    const imageSize = new window.kakao.maps.Size(36, 37) // 마커 이미지의 크기
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
      spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
      offset: new window.kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    }
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions
    )
    const marker = new window.kakao.maps.Marker({
      position, // 마커의 위치
      image: markerImage
    })

    marker.setMap(map) // 지도 위에 마커를 표출합니다
    markers.push(marker) // 배열에 생성된 마커를 추가합니다

    return marker
  }

  function removeMarker() {
    markers.forEach((marker: any) => marker.setMap(null))
    markers = []
  }

  function displayPagination(pagination: any) {
    const paginationEl = document.getElementById('pagination')
    const fragment = document.createDocumentFragment()
    let i

    // 기존에 추가된 페이지번호를 삭제합니다
    if (paginationEl !== null) {
      while (paginationEl.hasChildNodes()) {
        if (paginationEl.lastChild !== null) {
          paginationEl.removeChild(paginationEl.lastChild)
        }
      }

      for (i = 1; i <= pagination.last; i++) {
        const el = document.createElement('a')
        el.href = '#'
        el.innerHTML = i + ''

        if (i === pagination.current) {
          el.className = 'on'
        } else {
          el.onclick = (i => {
            return () => {
              pagination.gotoPage(i)
            }
          })(i)
        }

        fragment.appendChild(el)
      }
      paginationEl.appendChild(fragment)
    }
  }

  // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
  // 인포윈도우에 장소명을 표시합니다
  function displayInfowindow(marker: any, title: any) {
    const content = `<div style="padding:5px;z-index:1;">${title}</div>`

    infowindow.setContent(content)
    infowindow.open(map, marker)
  }

  // 검색결과 목록의 자식 Element를 제거하는 함수입니다
  function removeAllChildNods(el: any) {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild)
    }
  }

  const mapcss = css`
    width: 100%;
    height: 500px;
    display: inline-block;
    position: absolute;
    overflow: hidden;
  `
  const searchStyle = css`
    display: flex;
    justify-content: space-around;
    margin: 50px 0 10px 0;
  `
  const buttonStyle = css`
    width: 59%;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid white;
    border-radius: 5px;
    background: ${palette.violet[4]};
    padding: 10px 0;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${palette.violet[3]};
    }
  `

  return useObserver(() => (
    <Display>
      <div className="option">
        <div css={searchStyle}>
          <button
            css={buttonStyle}
            onClick={() => {
              searchPlaces(1)
            }}
          >
            내 주변 카페
          </button>
          <button
            css={buttonStyle}
            onClick={() => {
              searchPlaces(2)
            }}
          >
            내 주변 스터디룸
          </button>
        </div>
      </div>

      <div className="map_wrap">
        <div id="map" css={mapcss}></div>
        <div id="menu_wrap" className="bg_white">
          <div
            css={css`
              text-align: center;
              font-size: 13px;
              font-weight: bold;
              margin-top: 10px;
              margin-bottom: 10px;
              padding-top: 5px;
              padding-bottom: 5px;
              background-color: white;
            `}
          >
            "{UserDetailStore.data.city} {UserDetailStore.data.town}" 기준 검색
            결과입니다.
          </div>
          <ul id="placesList"></ul>
          <div id="pagination"></div>
        </div>
      </div>
    </Display>
  ))
}
export default MapView
