//---------------- nav ----------------
const about = document.getElementById('about');
 const project = document.getElementById('project');
 const designer = document.getElementById('designer');
 const archive = document.getElementById('archive');

 // 마우스를 버튼에 올렸을 때 텍스트 변경
 about.addEventListener('mouseenter', () => {
  about.textContent = '?bo?t,';
 });
 project.addEventListener('mouseenter', () => {
  project.textContent = 'P?oje?t,';
 });
 archive.addEventListener('mouseenter', () => {
  archive.textContent = 'A?chi?e.';
 });

 // 마우스를 버튼에서 뗐을 때 원래 텍스트로 복원
 about.addEventListener('mouseleave', () => {
  about.textContent = 'About,';
 });
 project.addEventListener('mouseleave', () => {
  project.textContent = 'Project,';
});
archive.addEventListener('mouseleave', () => {
  archive.textContent = 'Archive.';
});

function updateTextForMobile() {
    // 모바일인지 확인 (화면 너비 기준)
    if (window.innerWidth <= 768) {
      document.getElementById("footer2").innerText = "SEOULTECH VISUAL COMMUNICATION DESIGN 42ST GRADUATION EXHIBITION WEBSTIE ‘FIND ME!’ 2024ⓒSeoul National University of Science and Technology. All Rights Reserved.";
    } else { 
      document.getElementById("footer2").innerText = "SEOULTECH VISUAL COMMUNICATION DESIGN 42ST GRADUATION EXHIBITION WEBSTIE ‘FIND ME!’ \n 2024ⓒSeoul National University of Science and Technology. All Rights Reserved.";
    }
  }
  
  // 페이지 로드 시 실행
  updateTextForMobile();
  
  // 화면 크기 변경 시에도 실행
  window.addEventListener("resize", updateTextForMobile);

// 김도연56 김혜진33 전은빈66 전소은10 조가은22 김효원13 김송하63 이세영50

function fillStudentInfo1() {
  let sts = [{"학번":17100818,"이름":"김도연","1":"resource/st/17100818_1.webp","2":"resource/st/17100818_2.webp","3":"resource/st/17100818_3.webp"},
  {"학번":17100849,"이름":"박재은","1":"resource/st/17100849_1.webp","2":"resource/st/17100849_2.webp","3":"resource/st/17100849_3.webp"},
  {"학번":18100821,"이름":"김민석","1":"resource/st/18100821_1.webp","2":"resource/st/18100821_2.webp","3":"resource/st/18100821_3.webp"},
  {"학번":18100831,"이름":"김은솔","1":"resource/st/18100831_1.webp","2":"resource/st/18100831_2.webp","3":"resource/st/18100831_3.webp"},
  {"학번":18100835,"이름":"김지수","1":"resource/st/18100835_1.webp","2":"resource/st/18100835_2.webp","3":"resource/st/18100835_3.webp"},
  {"학번":18100864,"이름":"송수정","1":"resource/st/dummy1_1.webp","2":"resource/st/dummy1_2.webp","3":"resource/st/18100864_3.webp"},
  {"학번":18100903,"이름":"정수환","1":"resource/st/18100903_1.webp","2":"resource/st/18100903_2.webp","3":"resource/st/18100903_3.webp"},
  {"학번":18100909,"이름":"최일","1":"resource/st/18100909_1.webp","2":"resource/st/18100909_2.webp","3":"resource/st/18100909_3.webp"},
  {"학번":18100916,"이름":"허유민","1":"resource/st/18100916_1.webp","2":"resource/st/18100916_2.webp","3":"resource/st/18100916_3.webp"},
  {"학번":18100976,"이름":"송지은","1":"resource/st/18100976_1.webp","2":"resource/st/18100976_2.webp","3":"resource/st/18100976_3.webp"},
  {"학번":18101009,"이름":"김지민","1":"resource/st/dummy2_1.webp","2":"resource/st/dummy2_2.webp","3":"resource/st/18101009_3.webp"},
  {"학번":19100832,"이름":"김미정","1":"resource/st/19100832_1.webp","2":"resource/st/19100832_2.webp","3":"resource/st/19100832_3.webp"},
  {"학번":19100844,"이름":"김윤수","1":"resource/st/19100844_1.webp","2":"resource/st/19100844_2.webp","3":"resource/st/19100844_3.webp"},
  {"학번":19100845,"이름":"김정민","1":"resource/st/dummy2_1.webp","2":"resource/st/dummy2_2.webp","3":"resource/st/19100845_3.webp"},
  {"학번":19100853,"이름":"문경서","1":"resource/st/19100853_1.webp","2":"resource/st/19100853_2.webp","3":"resource/st/19100853_3.webp"},
  {"학번":19100859,"이름":"박혜린","1":"resource/st/dummy1_1.webp","2":"resource/st/dummy1_2.webp","3":"resource/st/19100859_3.webp"},
  {"학번":19100861,"이름":"배채원","1":"resource/st/dummy2_1.webp","2":"resource/st/dummy2_2.webp","3":"resource/st/19100861_3.webp"},
  {"학번":19100866,"이름":"성가은","1":"resource/st/19100866_1.webp","2":"resource/st/19100866_2.webp","3":"resource/st/19100866_3.webp"},
  {"학번":19100869,"이름":"안소연","1":"resource/st/19100869_1.webp","2":"resource/st/19100869_2.webp","3":"resource/st/19100869_3.webp"},
  {"학번":19100870,"이름":"안수빈","1":"resource/st/dummy1_1.webp","2":"resource/st/dummy1_2.webp","3":"resource/st/19100870_3.webp"},
  {"학번":19100880,"이름":"윤아영","1":"resource/st/19100880_1.png","2":"resource/st/19100880_2.png","3":"resource/st/19100880_3.webp"},
  {"학번":19100886,"이름":"이수정","1":"resource/st/dummy1_1.webp","2":"resource/st/dummy1_2.webp","3":"resource/st/19100886_3.webp"},
  {"학번":19100907,"이름":"전소은","1":"resource/st/19100907_1.webp","2":"resource/st/19100907_2.webp","3":"resource/st/19100907_3.webp"},
  {"학번":19100917,"이름":"최다운","1":"resource/st/19100917_1.webp","2":"resource/st/19100917_2.webp","3":"resource/st/19100917_3.webp"},
  {"학번":19100968,"이름":"강혜린","1":"resource/st/19100968_1.webp","2":"resource/st/19100968_2.webp","3":"resource/st/19100968_3.webp"},
  {"학번":19101005,"이름":"조가은","1":"resource/st/19101005_1.webp","2":"resource/st/19101005_2.webp","3":"resource/st/19101005_3.webp"},
  {"학번":19101044,"이름":"최지인","1":"resource/st/dummy2_1.webp","2":"resource/st/dummy2_2.webp","3":"resource/st/19101044_3.webp"},
  {"학번":19101157,"이름":"김태림","1":"resource/st/19101157_1.webp","2":"resource/st/19101157_2.webp","3":"resource/st/19101157_3.webp"},
  {"학번":19101176,"이름":"임은희","1":"resource/st/19101176_1.webp","2":"resource/st/19101176_2.webp","3":"resource/st/19101176_3.webp"},
  {"학번":20100831,"이름":"김정민","1":"resource/st/dummy2_1.webp","2":"resource/st/dummy2_2.webp","3":"resource/st/20100831_3.webp"},
  {"학번":20100838,"이름":"박효준","1":"resource/st/20100838_1.webp","2":"resource/st/20100838_2.webp","3":"resource/st/20100838_3.webp"},
  {"학번":20100901,"이름":"최연이","1":"resource/st/20100901_1.webp","2":"resource/st/20100901_2.webp","3":"resource/st/20100901_3.webp"},
  {"학번":20100930,"이름":"정다솜","1":"resource/st/20100930_1.webp","2":"resource/st/20100930_2.webp","3":"resource/st/20100930_3.webp"},
  {"학번":20100982,"이름":"조유진","1":"resource/st/20100982_1.webp","2":"resource/st/20100982_2.webp","3":"resource/st/20100982_3.webp"},
  {"학번":20100992,"이름":"강서연","1":"resource/st/20100992_1.webp","2":"resource/st/20100992_2.webp","3":"resource/st/20100992_3.webp"},
  {"학번":20100996,"이름":"김송하","1":"resource/st/20100996_1.webp","2":"resource/st/20100996_2.webp","3":"resource/st/20100996_3.webp"},
  {"학번":20100997,"이름":"김여경","1":"resource/st/20100997_1.webp","2":"resource/st/20100997_2.webp","3":"resource/st/20100997_3.webp"},
  {"학번":20100999,"이름":"김의진","1":"resource/st/dummy1_1.webp","2":"resource/st/dummy1_2.webp","3":"resource/st/20100999_3.webp"},
  {"학번":20101000,"이름":"김지예","1":"resource/st/20101000_1.webp","2":"resource/st/20101000_2.webp","3":"resource/st/20101000_3.webp"},
  {"학번":20101001,"이름":"김지현","1":"resource/st/dummy2_1.webp","2":"resource/st/dummy2_2.webp","3":"resource/st/20101001_3.webp"},
  {"학번":20101003,"이름":"김현수","1":"resource/st/dummy1_1.webp","2":"resource/st/dummy1_2.webp","3":"resource/st/20101003_3.webp"},
  {"학번":20101004,"이름":"김현진","1":"resource/st/20101004_1.webp","2":"resource/st/20101004_2.webp","3":"resource/st/20101004_3.webp"},
  {"학번":20101005,"이름":"김혜진","1":"resource/st/20101005_1.webp","2":"resource/st/20101005_2.webp","3":"resource/st/20101005_3.webp"},
  {"학번":20101006,"이름":"김효원","1":"resource/st/20101006_1.webp","2":"resource/st/20101006_2.webp","3":"resource/st/20101006_3.webp"},
  {"학번":20101008,"이름":"민가영","1":"resource/st/20101008_1.webp","2":"resource/st/20101008_2.webp","3":"resource/st/20101008_3.webp"},
  {"학번":20101012,"이름":"박혜진","1":"resource/st/dummy1_1.webp","2":"resource/st/dummy1_2.webp","3":"resource/st/20101012_3.webp"},
  {"학번":20101017,"이름":"오윤경","1":"resource/st/20101017_1.webp","2":"resource/st/20101017_2.webp","3":"resource/st/20101017_3.webp"},
  {"학번":20101019,"이름":"우지윤","1":"resource/st/dummy2_1.webp","2":"resource/st/dummy2_2.webp","3":"resource/st/20101019_3.webp"},
  {"학번":20101020,"이름":"유은빈","1":"resource/st/20101020_1.webp","2":"resource/st/20101020_2.webp","3":"resource/st/20101020_3.webp"},
  {"학번":20101022,"이름":"윤하영","1":"resource/st/20101022_1.webp","2":"resource/st/20101022_2.webp","3":"resource/st/20101022_3.webp"},
  {"학번":20101025,"이름":"이민주","1":"resource/st/20101025_1.webp","2":"resource/st/20101025_2.webp","3":"resource/st/20101025_3.webp"},
  {"학번":20101026,"이름":"이산하","1":"resource/st/dummy2_1.webp","2":"resource/st/dummy2_2.webp","3":"resource/st/20101026_3.webp"},
  {"학번":20101027,"이름":"이서윤","1":"resource/st/20101027_1.webp","2":"resource/st/20101027_2.webp","3":"resource/st/20101027_3.webp"},
  {"학번":20101028,"이름":"이세영","1":"resource/st/20101028_1.webp","2":"resource/st/20101028_2.webp","3":"resource/st/20101028_3.webp"},
  {"학번":20101030,"이름":"이진원","1":"resource/st/20101030_1.webp","2":"resource/st/20101030_2.webp","3":"resource/st/20101030_3.webp"},
  {"학번":20101034,"이름":"전은빈","1":"resource/st/20101034_1.webp","2":"resource/st/20101034_2.webp","3":"resource/st/20101034_3.webp"},
  {"학번":20101035,"이름":"정가현","1":"resource/st/20101035_1.webp","2":"resource/st/20101035_2.webp","3":"resource/st/20101035_3.webp"},
  {"학번":20101037,"이름":"조연우","1":"resource/st/20101037_1.webp","2":"resource/st/20101037_2.webp","3":"resource/st/20101037_3.webp"},
  {"학번":20101038,"이름":"최승화","1":"resource/st/20101038_1.webp","2":"resource/st/20101038_2.webp","3":"resource/st/20101038_3.webp"},
  {"학번":20101040,"이름":"최인이","1":"resource/st/20101040_1.webp","2":"resource/st/20101040_2.webp","3":"resource/st/20101040_3.webp"},
  {"학번":21102206,"이름":"강수빈","1":"resource/st/21102206_1.webp","2":"resource/st/21102206_2.webp","3":"resource/st/21102206_3.webp"},
  {"학번":21102221,"이름":"김민정","1":"resource/st/21102221_1.webp","2":"resource/st/21102221_2.webp","3":"resource/st/21102221_3.webp"},
  {"학번":21102448,"이름":"부장탄","1":"resource/st/21102448_1.webp","2":"resource/st/21102448_2.webp","3":"resource/st/21102448_3.webp"},
  {"학번":21102449,"이름":"원티홍한","1":"resource/st/21102449_1.webp","2":"resource/st/21102449_2.webp","3":"resource/st/21102449_3.webp"}];

  for (let i = 0; i < sts.length; i++) {
      let stn = document.getElementById("st" + (i + 1)); // st1, st2, ... st73
      if (stn) { // 요소가 존재하는지 확인
          stn.innerHTML = sts[i]["이름"] + "<br>" + sts[i]["Ename"];
          stn.style.backgroundImage = "url(" + sts[i]["1"] + ")";

          stn.onmouseover = () => stn.style.backgroundImage = "url(" + sts[i]["2"] + ")";
          stn.onmouseout = () => stn.style.backgroundImage = "url(" + sts[i]["1"] + ")";
      }
  }
}

function filterStudents() {
    const searchInput = document.getElementById('searchInput');
    const people = document.querySelectorAll('.people.one');
    const miniMapContainer = document.getElementById('miniMapContainer'); // 미니맵 컨테이너

    searchInput.addEventListener('focus', () => {
        miniMapContainer.style.display = 'none'; // 검색창에 포커스 시 미니맵 숨기기
    });

    searchInput.addEventListener('blur', () => {
        miniMapContainer.style.display = 'block'; // 검색창 포커스 해제 시 미니맵 보이기
        updateMiniMap(); // 미니맵 업데이트
    });

    searchInput.addEventListener('keyup', (e) => {
        const searchFilter = e.target.value.toLowerCase().trim();

        people.forEach((person) => {
            if (person.textContent.toLowerCase().includes(searchFilter)) {
                person.style.display = 'block';
            } else {
                person.style.display = 'none';
            }
        });

        updateMiniMap(); // 필터링 후 미니맵 업데이트
    });
}

//---------검색창 클릭 시 확대 축소----------
document.addEventListener("DOMContentLoaded", () => {
    fillStudentInfo1();
    filterStudents();  // 필터링 기능 추가

    const designers = document.getElementById('designers');
    const searchInput = document.getElementById('searchInput');
    const miniMapContainer = document.getElementById('miniMapContainer');

    if (designers && searchInput) {
        designers.style.transformOrigin = '0 0';
        let lastTranslateX = 0;
        let lastTranslateY = 0;
        let scaleFactor = 1;

        searchInput.addEventListener('focus', function(event) {
            miniMapContainer.style.display = 'none'; // 포커스 될 때 미니맵 숨기기
            const scale = Math.min(window.innerWidth / designers.offsetWidth, window.innerHeight / designers.offsetHeight);
            const rect = designers.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;
            designers.style.transition = '0.5s'

            designers.style.transformOrigin = `${offsetX}px ${offsetY}px`;
            scaleFactor = scale; // 스케일 저장
            designers.style.transform = `scale(${scale}) translate(${lastTranslateX}px, ${lastTranslateY}px)`;

            document.documentElement.style.width = `${designers.offsetWidth * scale}px`;
            document.documentElement.style.height = `${designers.offsetHeight * scale}px`;
            document.body.style.width = `${designers.offsetWidth * scale}px`;
            document.body.style.height = `${designers.offsetHeight * scale}px`;

        });

        searchInput.addEventListener('blur', function() {
            miniMapContainer.style.display = 'block'; // 블러 될 때 미니맵 보이기
            document.documentElement.style.width = `${designers.offsetWidth}px`;
            document.documentElement.style.height = `${designers.offsetHeight}px`;
            document.body.style.width = `${designers.offsetWidth}px`;
            document.body.style.height = `${designers.offsetHeight}px`;

            designers.style.transform = `scale(1) translate(0, 0)`; // 스케일 원래대로
            scaleFactor = 1; // 스케일 리셋
            designers.style.transition = '0.5s'
        });
    } else {
        console.error('Element(s) not found.');
    }
});

const designers = document.querySelector('.designer');
let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0; // 현재 위치 저장

designers.addEventListener('mousedown', (e) => {
    isDragging = true;
    designers.style.transition = '0.1s'
    startX = e.pageX - currentX;
    startY = e.pageY - currentY;
    designers.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    designers.style.transition = '0.1s';
    // 현재 마우스 위치에 따른 이동 값 계산
    currentX = e.pageX - startX;
    currentY = e.pageY - startY;

    // 화면 밖으로 나가지 않도록 제한
    const minX = window.innerWidth - designers.offsetWidth; // 최소 X 좌표
    const minY = window.innerHeight - designers.offsetHeight; // 최소 Y 좌표

    // 현재 위치를 제한
    currentX = Math.min(0, Math.max(currentX, minX));
    currentY = Math.min(0, Math.max(currentY, minY));

    // transform으로 위치를 업데이트
    designers.style.transform = `translate(${currentX}px, ${currentY}px)`;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    designers.style.cursor = 'grab';
});

// 진짜 울고싶음 ----------------------

function updateMiniMap() {
    const miniMap = document.getElementById('miniMap');
    const miniMapViewport = document.getElementById('miniMapViewport');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const designers = document.querySelector('.designer');
    const designersWidth = designers.offsetWidth;
    const designersHeight = designers.offsetHeight;

    // 현재 스크롤 위치 가져오기
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    // 뷰포트 크기 계산
    const viewportRatioX = (viewportWidth / designersWidth) * 100; 
    const viewportRatioY = (viewportHeight / designersHeight) * 100;

    // 뷰포트 박스 위치 설정
    miniMapViewport.style.width = `${viewportRatioX}%`;
    miniMapViewport.style.height = `${viewportRatioY}%`;
    miniMapViewport.style.left = `${(scrollX / designersWidth) * 100}%`;
    miniMapViewport.style.top = `${(scrollY / designersHeight) * 100}%`;

    const people = document.querySelectorAll('.people.one:not(.dummy)');

    // 미니맵의 기존 점 삭제
    while (miniMap.firstChild) {
        miniMap.removeChild(miniMap.firstChild);
    }

    people.forEach(person => {
        if (person.style.display !== 'none') { // 요소가 보이는 경우에만 점 추가
            const rect = person.getBoundingClientRect(); // 요소의 크기와 위치

            // 요소의 페이지 기준 좌표 계산
            const pageX = rect.left + window.scrollX; // 현재 스크롤을 더해줌
            const pageY = rect.top + window.scrollY; // 현재 스크롤을 더해줌

            // 미니 맵에서의 비율 계산
            const mapX = (pageX / designersWidth) * 100;
            const mapY = (pageY / designersHeight) * 100;

            // 점 만들기
            const dot = document.createElement('div');
            dot.style.position = 'absolute';
            dot.style.width = '5px'; // 점 크기
            dot.style.height = '5px'; // 점 크기
            dot.style.backgroundColor = 'white'; // 점 색상
            dot.style.borderRadius = '50%'; // 원형
            dot.style.left = `${mapX}%`;
            dot.style.top = `${mapY}%`;

            miniMap.appendChild(dot); // 미니 맵에 점 추가
        }
    });
}

// 스크롤이나 리사이즈 시 미니 맵 업데이트
window.addEventListener('scroll', updateMiniMap);
window.addEventListener('resize', updateMiniMap);
// 페이지 로드 시 초기 미니 맵 설정


document.addEventListener('DOMContentLoaded', updateMiniMap);

// 스크롤, 리사이즈, 마우스 다운 시 미니 맵 업데이트
window.addEventListener('scroll', updateMiniMap);
window.addEventListener('resize', updateMiniMap);
window.addEventListener('mousedown', updateMiniMap);

// 마우스가 이동할 때 미니 맵 업데이트
window.addEventListener('mousemove', updateMiniMap);

// 검색 필터링 기능
function filterStudents() {
  const searchInput = document.getElementById('searchInput');
  const people = document.querySelectorAll('.people.one');

  searchInput.addEventListener('keyup', (e) => {
      const searchFilter = e.target.value.toLowerCase().trim();

      people.forEach((person) => {

          if (person.textContent.toLowerCase().includes(searchFilter)) {
              person.style.display = 'block';
          } else {
              person.style.display = 'none';
          }
      });

      updateMiniMap(); // 필터링 후 미니 맵 업데이트
  });


  // 포커스 시 미니 맵 컨테이너 숨기기
  searchInput.addEventListener('focus', () => {
      miniMapContainer.style.display = 'none'; // 미니 맵 컨테이너 숨기기
  });

  // 블러 시 미니 맵 컨테이너 보이기
  searchInput.addEventListener('blur', () => {
      miniMapContainer.style.display = 'block'; // 미니 맵 컨테이너 보이기
      updateMiniMap(); // 미니 맵 업데이트
  });
}

// 페이지 로드 시 초기 미니 맵 설정
document.addEventListener('DOMContentLoaded', updateMiniMap);

// 스크롤, 리사이즈, 마우스 다운 시 미니 맵 업데이트
window.addEventListener('scroll', updateMiniMap);
window.addEventListener('resize', updateMiniMap);
window.addEventListener('mousedown', updateMiniMap);

// 마우스가 이동할 때 미니 맵 업데이트
window.addEventListener('mousemove', updateMiniMap);

// 필터링 기능 추가
document.addEventListener("DOMContentLoaded", () => {
  fillStudentInfo1();
  filterStudents();
});



function adjustLayout() {
    const container = document.getElementById('container');
    const screenWidth = window.innerWidth;

    // 화면 너비가 768px 이상이면 3열
    if (screenWidth >= 768) {
      
      // HTML 구조를 그대로 유지

    // 화면 너비가 480px 이상 768px 이하일 때는 2열
    } else if (screenWidth >= 480) {
      div.style.designer = 'repeat(3, 1fr)';
      container.style.gap = '200px';
      // 필요 시 구조를 변경할 수도 있음

    // 화면 너비가 480px 이하일 때는 1열
    } else {
      container.style.gridTemplateColumns = '1fr';
      container.style.gap = '150px';
      // 더 이상 구조를 바꾸지 않아도 됨
    }
  }

  // 화면 크기가 변경될 때마다 레이아웃을 재조정
  window.addEventListener('resize', adjustLayout);

  // 처음 로드될 때 한 번 실행
  adjustLayout();







const modal_indi = document.querySelector('.modal.indi');
const modal_indiOpens = document.querySelectorAll('.people');
const modal_indiCloses = document.querySelectorAll('.close_btn');

// 열기 버튼을 눌렀을 때 모달팝업이 열림
modal_indiOpens.forEach((modal_indiOpen) => {
    modal_indiOpen.addEventListener('click', function() {
        const stIndex = parseInt(this.id.replace("st", "")) - 1; // ID에서 st를 제거하고 숫자로 변환
        fillStudentInfo2(stIndex); // 해당 인덱스로 정보 채우기
        modal_indi.classList.add('on'); // 모달 열기
        document.body.classList.add('no-scroll');
    });
});


// 닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modal_indiCloses.forEach((modal_indiClose) => {
    modal_indiClose.addEventListener('click', function() {
        modal_indi.classList.remove('on');
        document.body.classList.remove('no-scroll');
    });
});

function fillStudentInfo2(stIndex) {
    let sts = [
    {
            "index":[1],
            "kname":["조가은"],
            "ename":["Cho Gaeun"],
            "nick":["Gan"],
            "ex":["UX 디자인"],
            "con":["편집디자인"],
            "exThumb":["resource/work/st1_thumb.webp"],
            "conThumb":["resource/work/st1_thumb.webp"],
            "exFull":["resource/work/st1_full.webp"],
            "conFull":["resource/work/st1_full.webp"],
            "exTitle":["Flex 아아 경험이라고 OS"],
            "exTextK":["미술 작품 앞에서 감상에 몰입하기보다는 도슨트의 해석에 귀를 기울인 적이 있는가? 또는 영화가 끝난 후 자신의 인상을 뒤로하고 타인의 해석을 찾아본 경험이 있는가? '포스트안티고네(POSTANTIGONE)'는 이러한 교양주의적 접근에 대한 회의에서 출발하였다. 이 이름은 ‘이후의’를 의미하는 접두사 ‘post-’와 시대의 흐름에 저항했던 고대 그리스 비극의 주인공 ‘안티고네(Antigone)’를 결합하여 ‘현대의 반항아’를 상징한다. 이 극단은 전통적인 교양주의 감상에서 벗어나 개인의 경험에 기반한 깊이 있는 감상을 추구한다.\n'포스트안티고네'는 시대를 초월하여 명작으로 평가받는 극작품을 재료로 삼지만, 단순히 이를 재현하지 않는다. 오히려 전통적인 해석을 해체하고 현대적 시각으로 재구성하여 작품을 새롭게 창조한다. 이 과정을 통해 관객들은 고정된 의미에서 벗어나 작품을 자유롭게 음미하고 자신만의 해석을 발견할 수 있다. '포스트안티고네'는 관객의 열린 감상과 해석을 존중하며, 능동적인 감상을 유도하는 데 주력한다."],
            "exTextE":["Have you ever focused more on a docent’s interpretation than engaging with a work of art? POSTANTIGONE challenges such conventional approaches. Its name combines ‘post-’ with ‘Antigone’, the Greek heroine who defied her era, symbolizing the ‘modern rebel’. The company seeks deeper understanding through personal experience, not traditional methods. POSTANTIGONE uses classic dramas but doesn’t just reproduce them. It deconstructs traditional interpretations and reconstructs works from a contemporary perspective. This encourages audiences to move beyond fixed meanings, explore freely, and find their own interpretations. POSTANTIGONE values open appreciation and active engagement."],
            "conTitle":["포스트안티고네 POSTANTIGONE"],
            "conTextK":["그래서 왜 접어야 하는데?' 아이폰 출시 이후 스마트폰 시장의 점유율은 바 타입 디바이스가 지배적이다. 최근 폴더블 스마트폰 시장이 떠오르기 시작했지만, 대화면을 제공하는 패블릿 타입은 호응을 얻는 반면, 기존 바타입 스마트폰을 접은 형태인 클램셸 타입은 여전히 회의적인 시각이 존재한다.\n 정말 스마트폰을 접어야 할 필요가 없을까? 폴더블 스마트폰에 대한 대중의 여론과 사용자 경험을 분석한 결과, 이러한 반응은 하드웨어와 소프트웨어 발전 간의 간극에서 기인한 것으로 밝혀졌다. 소프트웨어적 개선이 이 오명을 해소할 수 있다고 믿으며, 두 차례의 워크샵를 바탕으로 폴더블 스마트폰만이 제공할 수 있는 독보적인 경험을 0°, 45°, 90°, 135°, 180° 다섯 가지 물리적 상태를 기준삼아 정의하고 이를 OS 시스템으로 구현하였다."],
            "conTextE":["'So why should we fold?' Since the iPhone's release, the smartphone market has been dominated by bar-type devices. Recently, foldable smartphones have emerged, but while phablets with large screens receive positive feedback, clamshell types that fold traditional smartphones still face skepticism. \n Is there really no need to fold smartphones? Analysis of public opinion and user experiences shows these reactions stem from a gap between hardware and software advancements. We believe that software improvements can address this stigma, and based on two workshops, we have identified four unique experiences that only foldable smartphones offer and have developed these into an OS system."],
            "insta":["@nueagohc"],
            "behance":[0],
            "email":["rkdms9285@naver.com"],
            "propmt1":["비트 빠른 음악을 좋아하는, 편함을 추구하는, on/off가 확실한."],
            "prompt2":["버티컬 마우스, 아디다스 팬츠, 두 개의 단추만 잠궈진 흰색 셔츠"],
            "color":["#E0FC61"],
            "profile":["resource/st/19101005_2.webp"],
            "insta": "@itsbowod",
            "behance": "https://www.behance.net/itsbowod",
            "email": "itsbowod@gmail.com",
            "prompt1": "오지랖 넓은, K-장녀인, 뻔뻔한, 그래도 사려깊은.",
            "prompt1_eng": "Nosy, eldest K-daughter, shameless, yet thoughtful.",
            "prompt2": "시원한 생맥주, 레이즈 감자칩, 허벌 향수, 5번 잃어버려도 돌아오는 카드지갑.",
            "prompt2_eng": "A refreshing draft beer, Lay's potato chips, herbal perfume, a card wallet that returns even after being lost five times.",
            "color": "#139859"
        
      },
      {
        "index":[2],
        "kname":["전소은"],
        "ename":["Jeon Soeun"],
        "nick":["Soeun"],
        "ex":["UX 디자인"],
        "con":["편집디자인"],
        "exThumb":["resource/work/st2_thumb.webp"],
        "conThumb":["resource/work/st2_thumb.webp"],
        "exFull":["resource/work/st2_full.webp"],
        "conFull":["resource/work/st2_full.webp"],
        "exTitle":["BtoA"],
        "exTextK":["미술 작품 앞에서 감상에 몰입하기보다는 도슨트의 해석에 귀를 기울인 적이 있는가? 또는 영화가 끝난 후 자신의 인상을 뒤로하고 타인의 해석을 찾아본 경험이 있는가? '포스트안티고네(POSTANTIGONE)'는 이러한 교양주의적 접근에 대한 회의에서 출발하였다. 이 이름은 ‘이후의’를 의미하는 접두사 ‘post-’와 시대의 흐름에 저항했던 고대 그리스 비극의 주인공 ‘안티고네(Antigone)’를 결합하여 ‘현대의 반항아’를 상징한다. 이 극단은 전통적인 교양주의 감상에서 벗어나 개인의 경험에 기반한 깊이 있는 감상을 추구한다.\n'포스트안티고네'는 시대를 초월하여 명작으로 평가받는 극작품을 재료로 삼지만, 단순히 이를 재현하지 않는다. 오히려 전통적인 해석을 해체하고 현대적 시각으로 재구성하여 작품을 새롭게 창조한다. 이 과정을 통해 관객들은 고정된 의미에서 벗어나 작품을 자유롭게 음미하고 자신만의 해석을 발견할 수 있다. '포스트안티고네'는 관객의 열린 감상과 해석을 존중하며, 능동적인 감상을 유도하는 데 주력한다."],
        "exTextE":["Have you ever focused more on a docent’s interpretation than engaging with a work of art? POSTANTIGONE challenges such conventional approaches. Its name combines ‘post-’ with ‘Antigone’, the Greek heroine who defied her era, symbolizing the ‘modern rebel’. The company seeks deeper understanding through personal experience, not traditional methods. POSTANTIGONE uses classic dramas but doesn’t just reproduce them. It deconstructs traditional interpretations and reconstructs works from a contemporary perspective. This encourages audiences to move beyond fixed meanings, explore freely, and find their own interpretations. POSTANTIGONE values open appreciation and active engagement."],
        "conTitle":["시티인덱스 City Index"],
        "conTextK":["그래서 왜 접어야 하는데?' 아이폰 출시 이후 스마트폰 시장의 점유율은 바 타입 디바이스가 지배적이다. 최근 폴더블 스마트폰 시장이 떠오르기 시작했지만, 대화면을 제공하는 패블릿 타입은 호응을 얻는 반면, 기존 바타입 스마트폰을 접은 형태인 클램셸 타입은 여전히 회의적인 시각이 존재한다.\n 정말 스마트폰을 접어야 할 필요가 없을까? 폴더블 스마트폰에 대한 대중의 여론과 사용자 경험을 분석한 결과, 이러한 반응은 하드웨어와 소프트웨어 발전 간의 간극에서 기인한 것으로 밝혀졌다. 소프트웨어적 개선이 이 오명을 해소할 수 있다고 믿으며, 두 차례의 워크샵를 바탕으로 폴더블 스마트폰만이 제공할 수 있는 독보적인 경험을 0°, 45°, 90°, 135°, 180° 다섯 가지 물리적 상태를 기준삼아 정의하고 이를 OS 시스템으로 구현하였다."],
        "conTextE":["'So why should we fold?' Since the iPhone's release, the smartphone market has been dominated by bar-type devices. Recently, foldable smartphones have emerged, but while phablets with large screens receive positive feedback, clamshell types that fold traditional smartphones still face skepticism. \n Is there really no need to fold smartphones? Analysis of public opinion and user experiences shows these reactions stem from a gap between hardware and software advancements. We believe that software improvements can address this stigma, and based on two workshops, we have identified four unique experiences that only foldable smartphones offer and have developed these into an OS system."],
        "insta":["@nueagohc"],
        "behance":[0],
        "email":["rkdms9285@naver.com"],
        "propmt1":["비트 빠른 음악을 좋아하는, 편함을 추구하는, on/off가 확실한."],
        "prompt2":["버티컬 마우스, 아디다스 팬츠, 두 개의 단추만 잠궈진 흰색 셔츠"],
        "color":["#E0FC61"],
        "profile":["resource/st/19100907_2.webp"],
        "insta": "@mush_cat00",
        "behance": "",
        "email": "lucylove12311@gmail.com",
        "prompt1": "섬세한, 행동력 있는, rpg게임을 좋아하는.",
        "prompt1_eng": "Detailed, behavioral, RPG-loving.",
        "prompt2": "검은색 고양이 인형, 연보라색 파우치, 타블렛 펜",
        "prompt2_eng": "A black cat doll, A lavender color pouch, Tablet pen",
        "color": "#9370db"
  },
  {

    
    "index":[3],
    "kname":["김도연"],
    "ename":["Kim Doyeon"],
    "ex":["아이덴티티 디자인"],
    "con":["편집디자인"],
    "exThumb":["resource/work/st3_thumb.webp"],
    "conThumb":["resource/work/st3_thumb.webp"],
    "exFull":["resource/work/st3_full.webp"],
    "conFull":["resource/work/st3_full.webp"],
    "exTitle":["예미니 Yemini"],
    "exTextK":["연극은 인간의 삶을 재료로 삼는다. 각자의 세계 안에서 자신의 삶을 가장 잘 이해하는 사람은 결국 자신일 것이다. 그런데 왜 우리는 작품을 마주할 때, 자신의 생각보다 원작자의 의도나 타인의 해석에 기대려 할까? ‘포스트안티고네’는 실존주의적 질문을 던지면서, 관습적으로 고정된 의미에서 벗어나 관객이 주체적으로 해석할 수 있도록 돕는 극단이다. 관람 전, 관람 중, 그리고 관람 후까지 다양한 인쇄 매체를 통해 관객과 함께 사색의 여정을 나눈다.같은 작품을 보더라도 해석과 감상은 무수히 다를 것이며, 그 형태도 다양할 것이다. 연극을 통해 자신의 삶을 되돌아보며 깊이 사색하는 순간, 관객은 비로소 실존하게 된다."],
    "exTextE":["Theater draws from human life. Each person best understands their own life, yet we often rely on the author’s intent or others’ interpretations over our own. ‘POSTANTIGONE’ raises existential questions and encourages independent interpretation, breaking from fixed meanings. Through printed materials, it engages audiences before, during, and after the performance. Interpretations and impressions of the same play vary infinitely. As viewers reflect on their lives through the play, they come into true existence."],
    "conTitle":["스마일 서비스센터"],
    "conTextK":["그래서 왜 접어야 하는데?' 아이폰 출시 이후 스마트폰 시장의 점유율은 바 타입 디바이스가 지배적이다. 최근 폴더블 스마트폰 시장이 떠오르기 시작했지만, 대화면을 제공하는 패블릿 타입은 호응을 얻는 반면, 기존 바타입 스마트폰을 접은 형태인 클램셸 타입은 여전히 회의적인 시각이 존재한다.\n 정말 스마트폰을 접어야 할 필요가 없을까? 폴더블 스마트폰에 대한 대중의 여론과 사용자 경험을 분석한 결과, 이러한 반응은 하드웨어와 소프트웨어 발전 간의 간극에서 기인한 것으로 밝혀졌다. 소프트웨어적 개선이 이 오명을 해소할 수 있다고 믿으며, 두 차례의 워크샵를 바탕으로 폴더블 스마트폰만이 제공할 수 있는 독보적인 경험을 0°, 45°, 90°, 135°, 180° 다섯 가지 물리적 상태를 기준삼아 정의하고 이를 OS 시스템으로 구현하였다."],
    "conTextE":["'So why should we fold?' Since the iPhone's release, the smartphone market has been dominated by bar-type devices. Recently, foldable smartphones have emerged, but while phablets with large screens receive positive feedback, clamshell types that fold traditional smartphones still face skepticism. \n Is there really no need to fold smartphones? Analysis of public opinion and user experiences shows these reactions stem from a gap between hardware and software advancements. We believe that software improvements can address this stigma, and based on two workshops, we have identified four unique experiences that only foldable smartphones offer and have developed these into an OS system."],
    "insta":["@nueagohc"],
    "behance":[0],
    "email":["rkdms9285@naver.com"],
    "propmt1":["비트 빠른 음악을 좋아하는, 편함을 추구하는, on/off가 확실한."],
    "prompt2":["버티컬 마우스, 아디다스 팬츠, 두 개의 단추만 잠궈진 흰색 셔츠"],
    "color":["#E0FC61"],
    "profile":["resource/st/17100818_2.webp"],
    "insta": "",
    "behance": "",
    "email": "khl990615@naver.com",
    "prompt1": "엉뚱한, 어설픈, 유식한, 다루기 쉬운, 디저트를 좋아하는, 꾸준한, 추위를 많이타는, 아방한, 느린, 섬세한.",
    "prompt1_eng": "Quirky, Clumsy, Knowledgeable, Easygoing, Dessert-loving, Consistent, Sensitive to cold, Avant-garde, Slow, Delicate.",
    "prompt2": "아이패드, 너구리 인형, 딸기 케이크, 페퍼민트.",
    "prompt2_eng": "iPad, Raccoon doll, Strawberry cake, Peppermint.",
    "color": "#B72525"
}
        ];

    // // 클릭된 people의 정보로 모달 내용을 채움
    document.getElementById('ename').innerHTML = sts[stIndex].ename;
    document.getElementById('kname').innerHTML = sts[stIndex].kname;
    document.getElementById('profile').src = sts[stIndex].profile;
    document.getElementById('exThumb').src = sts[stIndex].exThumb;
    document.getElementById('conThumb').src = sts[stIndex].conThumb;
    document.getElementById('exTitle').innerHTML = sts[stIndex].exTitle;
    document.getElementById('conTitle').innerHTML = sts[stIndex].conTitle;
    document.getElementById('prompt1').innerHTML = sts[stIndex].prompt1;
    document.getElementById('prompt1_eng').innerHTML = sts[stIndex].prompt1_eng;
    document.getElementById('prompt2').innerHTML = sts[stIndex].prompt2;
    document.getElementById('prompt2_eng').innerHTML = sts[stIndex].prompt2_eng;
    document.getElementById('color').innerHTML = sts[stIndex].color;
    document.getElementById('insta').innerHTML = sts[stIndex].insta;
    document.getElementById('email').innerHTML = sts[stIndex].email;
    // document.getElementById('kname').innerHTML = sts[stIndex].kname[0]; // 배열에서 첫 번째 값 선택
    // document.getElementById('exTextK').innerHTML = sts[stIndex].exTextK[0];
    // document.getElementById('exTextE').innerHTML = sts[stIndex].exTextE[0];
    // document.getElementById('conThumb').src = sts[stIndex].conThumb[0];
    // document.getElementById('profile').src = sts[stIndex].profile[0];
    // document.getElementById('nick').innerHTML = sts[stIndex].nick[0];

  document.querySelector('.center').style.backgroundColor = sts[stIndex].color;
  document.querySelector('.head1').style.fill = sts[stIndex].color
  document.querySelector('.head2').style.fill = sts[stIndex].color
  document.querySelector('.right').style.backgroundColor = sts[stIndex].color;}

// 각각의 people에 클릭 이벤트 추가
document.querySelectorAll('.people').forEach((people) => {
    people.addEventListener('click', function(){
        const stIndex = parseInt(this.id.replace("st", "")) - 1; // ID에서 st를 제거하고 숫자로 변환
        fillStudentInfo2(stIndex); // 해당 인덱스로 정보 채우기
        modal_indi.classList.add('on'); // 모달 열기
        document.body.classList.add('no-scroll');
    });
});






// --------------------




const modal_con = document.querySelector('.modal.con');
const modal_ex = document.querySelector('.modal.ex');
const modal_exOpens = document.querySelectorAll('.work.ex');
const modal_conOpens = document.querySelectorAll('.work.con');
const otherOpens = document.getElementById('otherWork');
const modalCloses = document.querySelectorAll('.close_btn');

// 열기 버튼을 눌렀을 때 모달팝업이 열림
modal_exOpens.forEach((modal_exOpen) => {
    modal_exOpen.addEventListener('click', function() {
        const stIndex = parseInt(this.id.replace("st", "")) - 1; // ID에서 st를 제거하고 숫자로 변환
        fillStudentInfo(stIndex); // 해당 인덱스로 정보 채우기
        modal.classList.add('on'); // 모달 열기
        document.body.classList.add('no-scroll');
    });
});
modal_conOpens.forEach((modal_conOpen) => {
    modal_conOpen.addEventListener('click', function() {
        const stIndex = parseInt(this.id.replace("st", "")) - 1; // ID에서 st를 제거하고 숫자로 변환
        fillStudentInfo(stIndex); // 해당 인덱스로 정보 채우기
        modal.classList.add('on'); // 모달 열기
        document.body.classList.add('no-scroll');
    });
});

// 닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', function() {
        modal.classList.remove('on');
        document.body.classList.remove('no-scroll');
    });
});

function fillStudentInfo(stIndex) {
    let sts = [
    {
            "index":[1],
            "kname":["조가은"],
            "ename":["Cho Gaeun"],
            "nick":["Gan"],
            "ex":["UX 디자인"],
            "con":["편집디자인"],
            "exThumb":["resource/work/st1_thumb.webp"],
            "conThumb":["resource/work/st1_thumb.webp"],
            "exFull":["resource/work/st1_full.webp"],
            "conFull":["resource/work/st1_full.webp"],
            "exTitle":["Flex 아아 경험이라고 OS"],
            "exTextK":["미술 작품 앞에서 감상에 몰입하기보다는 도슨트의 해석에 귀를 기울인 적이 있는가? 또는 영화가 끝난 후 자신의 인상을 뒤로하고 타인의 해석을 찾아본 경험이 있는가? '포스트안티고네(POSTANTIGONE)'는 이러한 교양주의적 접근에 대한 회의에서 출발하였다. 이 이름은 ‘이후의’를 의미하는 접두사 ‘post-’와 시대의 흐름에 저항했던 고대 그리스 비극의 주인공 ‘안티고네(Antigone)’를 결합하여 ‘현대의 반항아’를 상징한다. 이 극단은 전통적인 교양주의 감상에서 벗어나 개인의 경험에 기반한 깊이 있는 감상을 추구한다.\n'포스트안티고네'는 시대를 초월하여 명작으로 평가받는 극작품을 재료로 삼지만, 단순히 이를 재현하지 않는다. 오히려 전통적인 해석을 해체하고 현대적 시각으로 재구성하여 작품을 새롭게 창조한다. 이 과정을 통해 관객들은 고정된 의미에서 벗어나 작품을 자유롭게 음미하고 자신만의 해석을 발견할 수 있다. '포스트안티고네'는 관객의 열린 감상과 해석을 존중하며, 능동적인 감상을 유도하는 데 주력한다."],
            "exTextE":["Have you ever focused more on a docent’s interpretation than engaging with a work of art? POSTANTIGONE challenges such conventional approaches. Its name combines ‘post-’ with ‘Antigone’, the Greek heroine who defied her era, symbolizing the ‘modern rebel’. The company seeks deeper understanding through personal experience, not traditional methods. POSTANTIGONE uses classic dramas but doesn’t just reproduce them. It deconstructs traditional interpretations and reconstructs works from a contemporary perspective. This encourages audiences to move beyond fixed meanings, explore freely, and find their own interpretations. POSTANTIGONE values open appreciation and active engagement."],
            "conTitle":["포스트안티고네 POSTANTIGONE"],
            "conTextK":["그래서 왜 접어야 하는데?' 아이폰 출시 이후 스마트폰 시장의 점유율은 바 타입 디바이스가 지배적이다. 최근 폴더블 스마트폰 시장이 떠오르기 시작했지만, 대화면을 제공하는 패블릿 타입은 호응을 얻는 반면, 기존 바타입 스마트폰을 접은 형태인 클램셸 타입은 여전히 회의적인 시각이 존재한다.\n 정말 스마트폰을 접어야 할 필요가 없을까? 폴더블 스마트폰에 대한 대중의 여론과 사용자 경험을 분석한 결과, 이러한 반응은 하드웨어와 소프트웨어 발전 간의 간극에서 기인한 것으로 밝혀졌다. 소프트웨어적 개선이 이 오명을 해소할 수 있다고 믿으며, 두 차례의 워크샵를 바탕으로 폴더블 스마트폰만이 제공할 수 있는 독보적인 경험을 0°, 45°, 90°, 135°, 180° 다섯 가지 물리적 상태를 기준삼아 정의하고 이를 OS 시스템으로 구현하였다."],
            "conTextE":["'So why should we fold?' Since the iPhone's release, the smartphone market has been dominated by bar-type devices. Recently, foldable smartphones have emerged, but while phablets with large screens receive positive feedback, clamshell types that fold traditional smartphones still face skepticism. \n Is there really no need to fold smartphones? Analysis of public opinion and user experiences shows these reactions stem from a gap between hardware and software advancements. We believe that software improvements can address this stigma, and based on two workshops, we have identified four unique experiences that only foldable smartphones offer and have developed these into an OS system."],
            "insta":["@nueagohc"],
            "behance":[0],
            "email":["rkdms9285@naver.com"],
            "propmt1":["비트 빠른 음악을 좋아하는, 편함을 추구하는, on/off가 확실한."],
            "prompt2":["버티컬 마우스, 아디다스 팬츠, 두 개의 단추만 잠궈진 흰색 셔츠"],
            "color":["#E0FC61"],
            "profile":["resource/st/19101005_2.webp"]
      },
      {
        "index":[2],
        "kname":["전소은"],
        "ename":["Jeon Soeun"],
        "nick":["Soeun"],
        "ex":["UX 디자인"],
        "con":["편집디자인"],
        "exThumb":["resource/work/st2_thumb.webp"],
        "conThumb":["resource/work/st2_thumb.webp"],
        "exFull":["resource/work/st2_full.webp"],
        "conFull":["resource/work/st2_full.webp"],
        "exTitle":["BtoA"],
        "exTextK":["미술 작품 앞에서 감상에 몰입하기보다는 도슨트의 해석에 귀를 기울인 적이 있는가? 또는 영화가 끝난 후 자신의 인상을 뒤로하고 타인의 해석을 찾아본 경험이 있는가? '포스트안티고네(POSTANTIGONE)'는 이러한 교양주의적 접근에 대한 회의에서 출발하였다. 이 이름은 ‘이후의’를 의미하는 접두사 ‘post-’와 시대의 흐름에 저항했던 고대 그리스 비극의 주인공 ‘안티고네(Antigone)’를 결합하여 ‘현대의 반항아’를 상징한다. 이 극단은 전통적인 교양주의 감상에서 벗어나 개인의 경험에 기반한 깊이 있는 감상을 추구한다.\n'포스트안티고네'는 시대를 초월하여 명작으로 평가받는 극작품을 재료로 삼지만, 단순히 이를 재현하지 않는다. 오히려 전통적인 해석을 해체하고 현대적 시각으로 재구성하여 작품을 새롭게 창조한다. 이 과정을 통해 관객들은 고정된 의미에서 벗어나 작품을 자유롭게 음미하고 자신만의 해석을 발견할 수 있다. '포스트안티고네'는 관객의 열린 감상과 해석을 존중하며, 능동적인 감상을 유도하는 데 주력한다."],
        "exTextE":["Have you ever focused more on a docent’s interpretation than engaging with a work of art? POSTANTIGONE challenges such conventional approaches. Its name combines ‘post-’ with ‘Antigone’, the Greek heroine who defied her era, symbolizing the ‘modern rebel’. The company seeks deeper understanding through personal experience, not traditional methods. POSTANTIGONE uses classic dramas but doesn’t just reproduce them. It deconstructs traditional interpretations and reconstructs works from a contemporary perspective. This encourages audiences to move beyond fixed meanings, explore freely, and find their own interpretations. POSTANTIGONE values open appreciation and active engagement."],
        "conTitle":["시티인덱스 City Index"],
        "conTextK":["그래서 왜 접어야 하는데?' 아이폰 출시 이후 스마트폰 시장의 점유율은 바 타입 디바이스가 지배적이다. 최근 폴더블 스마트폰 시장이 떠오르기 시작했지만, 대화면을 제공하는 패블릿 타입은 호응을 얻는 반면, 기존 바타입 스마트폰을 접은 형태인 클램셸 타입은 여전히 회의적인 시각이 존재한다.\n 정말 스마트폰을 접어야 할 필요가 없을까? 폴더블 스마트폰에 대한 대중의 여론과 사용자 경험을 분석한 결과, 이러한 반응은 하드웨어와 소프트웨어 발전 간의 간극에서 기인한 것으로 밝혀졌다. 소프트웨어적 개선이 이 오명을 해소할 수 있다고 믿으며, 두 차례의 워크샵를 바탕으로 폴더블 스마트폰만이 제공할 수 있는 독보적인 경험을 0°, 45°, 90°, 135°, 180° 다섯 가지 물리적 상태를 기준삼아 정의하고 이를 OS 시스템으로 구현하였다."],
        "conTextE":["'So why should we fold?' Since the iPhone's release, the smartphone market has been dominated by bar-type devices. Recently, foldable smartphones have emerged, but while phablets with large screens receive positive feedback, clamshell types that fold traditional smartphones still face skepticism. \n Is there really no need to fold smartphones? Analysis of public opinion and user experiences shows these reactions stem from a gap between hardware and software advancements. We believe that software improvements can address this stigma, and based on two workshops, we have identified four unique experiences that only foldable smartphones offer and have developed these into an OS system."],
        "insta":["@nueagohc"],
        "behance":[0],
        "email":["rkdms9285@naver.com"],
        "propmt1":["비트 빠른 음악을 좋아하는, 편함을 추구하는, on/off가 확실한."],
        "prompt2":["버티컬 마우스, 아디다스 팬츠, 두 개의 단추만 잠궈진 흰색 셔츠"],
        "color":["#E0FC61"],
        "profile":["resource/st/19100907_2.webp"]
  },
  {
    "index":[3],
    "kname":["김도연"],
    "ename":["Kim Doyeon"],
    "nick":["Doyeon"],
    "ex":["아이덴티티 디자인"],
    "con":["편집디자인"],
    "exThumb":["resource/work/st3_thumb.webp"],
    "conThumb":["resource/work/st3_thumb.webp"],
    "exFull":["resource/work/st3_full.webp"],
    "conFull":["resource/work/st3_full.webp"],
    "exTitle":["예미니 Yemini"],
    "exTextK":["연극은 인간의 삶을 재료로 삼는다. 각자의 세계 안에서 자신의 삶을 가장 잘 이해하는 사람은 결국 자신일 것이다. 그런데 왜 우리는 작품을 마주할 때, 자신의 생각보다 원작자의 의도나 타인의 해석에 기대려 할까? ‘포스트안티고네’는 실존주의적 질문을 던지면서, 관습적으로 고정된 의미에서 벗어나 관객이 주체적으로 해석할 수 있도록 돕는 극단이다. 관람 전, 관람 중, 그리고 관람 후까지 다양한 인쇄 매체를 통해 관객과 함께 사색의 여정을 나눈다.같은 작품을 보더라도 해석과 감상은 무수히 다를 것이며, 그 형태도 다양할 것이다. 연극을 통해 자신의 삶을 되돌아보며 깊이 사색하는 순간, 관객은 비로소 실존하게 된다."],
    "exTextE":["Theater draws from human life. Each person best understands their own life, yet we often rely on the author’s intent or others’ interpretations over our own. ‘POSTANTIGONE’ raises existential questions and encourages independent interpretation, breaking from fixed meanings. Through printed materials, it engages audiences before, during, and after the performance. Interpretations and impressions of the same play vary infinitely. As viewers reflect on their lives through the play, they come into true existence."],
    "conTitle":["스마일 서비스센터"],
    "conTextK":["그래서 왜 접어야 하는데?' 아이폰 출시 이후 스마트폰 시장의 점유율은 바 타입 디바이스가 지배적이다. 최근 폴더블 스마트폰 시장이 떠오르기 시작했지만, 대화면을 제공하는 패블릿 타입은 호응을 얻는 반면, 기존 바타입 스마트폰을 접은 형태인 클램셸 타입은 여전히 회의적인 시각이 존재한다.\n 정말 스마트폰을 접어야 할 필요가 없을까? 폴더블 스마트폰에 대한 대중의 여론과 사용자 경험을 분석한 결과, 이러한 반응은 하드웨어와 소프트웨어 발전 간의 간극에서 기인한 것으로 밝혀졌다. 소프트웨어적 개선이 이 오명을 해소할 수 있다고 믿으며, 두 차례의 워크샵를 바탕으로 폴더블 스마트폰만이 제공할 수 있는 독보적인 경험을 0°, 45°, 90°, 135°, 180° 다섯 가지 물리적 상태를 기준삼아 정의하고 이를 OS 시스템으로 구현하였다."],
    "conTextE":["'So why should we fold?' Since the iPhone's release, the smartphone market has been dominated by bar-type devices. Recently, foldable smartphones have emerged, but while phablets with large screens receive positive feedback, clamshell types that fold traditional smartphones still face skepticism. \n Is there really no need to fold smartphones? Analysis of public opinion and user experiences shows these reactions stem from a gap between hardware and software advancements. We believe that software improvements can address this stigma, and based on two workshops, we have identified four unique experiences that only foldable smartphones offer and have developed these into an OS system."],
    "insta":["@nueagohc"],
    "behance":[0],
    "email":["rkdms9285@naver.com"],
    "propmt1":["비트 빠른 음악을 좋아하는, 편함을 추구하는, on/off가 확실한."],
    "prompt2":["버티컬 마우스, 아디다스 팬츠, 두 개의 단추만 잠궈진 흰색 셔츠"],
    "color":["#E0FC61"],
    "profile":["resource/st/17100818_2.webp"]
}
        ];

    // 클릭된 work의 정보로 모달 내용을 채움
    document.getElementById('exFull').src = sts[stIndex].exFull;
    document.getElementById('exTitle').innerHTML = sts[stIndex].exTitle;
    document.getElementById('kname').innerHTML = sts[stIndex].kname[0]; // 배열에서 첫 번째 값 선택
    document.getElementById('exTextK').innerHTML = sts[stIndex].exTextK[0];
    document.getElementById('exTextE').innerHTML = sts[stIndex].exTextE[0];
    document.getElementById('conThumb').src = sts[stIndex].conThumb[0];
    document.getElementById('profile').src = sts[stIndex].profile[0];
    document.getElementById('nick').innerHTML = sts[stIndex].nick[0];
}

// 각각의 work에 클릭 이벤트 추가
document.querySelectorAll('.work.con').forEach((work) => {
    work.addEventListener('click', function(){
        const stIndex = parseInt(this.id.replace("st", "")) - 1; // ID에서 st를 제거하고 숫자로 변환
        fillStudentInfo(stIndex); // 해당 인덱스로 정보 채우기
        modal.classList.add('on'); // 모달 열기
        document.body.classList.add('no-scroll');
    });
});
document.querySelectorAll('.work.ex').forEach((work) => {
    work.addEventListener('click', function(){
        const stIndex = parseInt(this.id.replace("st", "")) - 1; // ID에서 st를 제거하고 숫자로 변환
        fillStudentInfo(stIndex); // 해당 인덱스로 정보 채우기
        modal.classList.add('on'); // 모달 열기
        document.body.classList.add('no-scroll');
    });
});


// ----------- 버튼 호버 시 각 아이콘이 띠용하게 -------------
var otherWork = document.getElementById('otherWork');
var findWho = document.getElementById('findWho');
var peoplePkb = document.getElementById('people_pkb');
var workPkb = document.getElementById('work_pkb');



otherWork.onmouseover = function() {
    this.style.width = '100%';
    findWho.style.width = '0%';
    workPkb.style.display = 'inline';
    workPkb.style.bottom = '12vh';
};

otherWork.onmouseout = function() {
    this.style.width = '50%';
    findWho.style.width = '50%';
    workPkb.style.bottom = '-70vh';

};

findWho.onmouseover = function() {
    this.style.width = '100%';
    otherWork.style.width = '0%';
    peoplePkb.style.bottom = '-15vh';
};

findWho.onmouseout = function() {
    this.style.width = '50%';
    otherWork.style.width = '50%';
    peoplePkb.style.bottom = '-100vh';

};





