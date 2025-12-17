

// 패널
document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('[data-panel]');
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const panelClass = button.getAttribute('data-panel');
            const panel = document.querySelector(`.${panelClass}`);
            if (panel) {
                panel.classList.add('is-open');
            }
            const closeBtn = panel.querySelector('.bCloseBtn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    panel.classList.remove('is-open');
                });
            }
        });
    });
});

// 팝업
document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('[data-popup]');
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popupClass = button.getAttribute('data-popup');
            const popup = document.querySelector(`.${popupClass}`);
            if (popup) {
                popup.classList.add('is-open');
            }
            const closeBtn = popup.querySelector('.bCloseBtn, .wCloseBtn, .closeBtn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    popup.classList.remove('is-open');
                });
            }
        });
    });
});


// 2단이상 팝업은 규칙을 위 함수와 공유할 수 없음. 별도로 제작 해야함
function nestedPopup() {
    var currentPopup = null;
    $("[type='button']").click(function () {
        if ($(this).attr("data-nested")) {
            currentPopup = "." + $(this).attr("data-nested");
            $(currentPopup).addClass("active");
        }
    });
    // 1팝업여트파트
    $("[type='button']").click(function () {
        if ($(this).attr("data-stacked")) {
            currentPopup = "." + $(this).attr("data-stacked");
            $(currentPopup).addClass("active");


        } else if ($(this).attr("data-sub")) {
            currentPopup = "." + $(this).attr("data-sub");
            $(currentPopup).toggleClass("active");
        }
    });
    // // 2팝업여닫는파트

    $(".bCloseBtn").click(function () {
        $(currentPopup).removeClass("active");
    });
    //1팝업닫는파트
}
// 디테일 이미지(책보고 함)
// document.addEventListener("DOMContentLoaded", () => {

//     const mainImage = document.querySelector('.detailContainer aside figure img');
//     const thumbImages = document.querySelectorAll('.detailedImage img');

//     thumbImages.forEach((thumbImage) => {
//         thumbImage.addEventListener('click', (event) => {
//             mainImage.src = event.target.src;
//             mainImage.animate({ opacity: [0, 1] }, 500);
//         });
//     });

// });



function productControl() {
// 1) 처음 로드시: 현재 활성화된(activated) 컬러의 첫 label 텍스트 가져오기
var $img = $(".detailContainer div:first-of-type aside figure img").attr("src");
var $firstLoad = $(".colorPage.activated li:first-of-type label").text();

// 2) 파일명 교체하여 이미지 표시
var $tuneName = $img.replace(".png", "_" + $firstLoad + ".png");
$(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);


// 3) 컬러 클릭 이벤트
$(".colorPage li input[type=radio]").click(function(){
    
    // 3-1) 새로 클릭한 컬러의 label 텍스트 가져오기
    var selectedColor = $(this).next("label").text();

    // 3-2) 현재 이미지 src 다시 가져오기
    var currentImg = $(".detailContainer div:first-of-type aside figure img").attr("src");

    // 3-3) 파일명 교체
    var newImg = currentImg.replace(/_[^_]+\.png$/, "_" + selectedColor + ".png");

    // 3-4) 이미지 교체
    $(".detailContainer div:first-of-type aside figure img").attr("src", newImg);
});


// 4) Planter 변경 시 해당 colorPage만 표시
$('input[name="option1"]').change(function(){
    var target = $(this).data("color");

    // 모두 비활성화
    $(".colorPage").removeClass("activated");

    // 해당 colorPage 활성화
    $("#" + target).addClass("activated");

    // 활성화된 페이지의 첫 color label 가져오기
    var firstColor = $("#" + target).find("li:first-of-type label").text();

    // 현재 이미지 경로 다시 쓰기
    var imgSrc = $(".detailContainer div:first-of-type aside figure img").attr("src");
    var newImgSrc = imgSrc.replace(/_[^_]+\.png$/, "_" + firstColor + ".png");

    $(".detailContainer div:first-of-type aside figure img").attr("src", newImgSrc);
});



}



function productControl() {
    var largeImg = $(".detailContainer div:first-of-type aside figure img");

    var $firstLoad = $(".color .colorPage.activated li:first-of-type label").text();

    var $tuneName = largeImg.attr("src").replace(".png", $firstLoad + ".png");
    largeImg.attr("src", $tuneName);

    // label 클릭 이벤트 — 여기만 있으면 됨!
    $(".color .colorPage li label").click(function () {

        $firstLoad = $(this).text();
        $tuneName = largeImg.attr("src").replace(/(.*)_.*\.png$/, "$1_" + $firstLoad + ".png");
        largeImg.attr("src", $tuneName);

        // active처리
        $(".color .colorPage li label").removeClass("active");
        $(this).addClass("active");
    });
}
// detailed product
// 참고해서 detail 작업해보기

function productControl() {
    var $img = $(".detailContainer div:first-of-type aside figure img").attr("src");

    var $firstLoad = $(".color .colorPage.activated li:first-of-type label").text();

    var $tuneName = $(".detailContainer div:first-of-type aside figure img").attr("src").replace(".png", $firstLoad + ".png");
    // var $tuneName = ($(".detailContainer div:first-of-type aside figure img").attr("src") || "").replace(".png", $firstLoad + ".png"); // 안되었을때 이걸로 하니깐 작동됨 머지??


    $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

    $(".color .colorPage li label").click(function () {

        $firstLoad = $(this).text();

        $tuneName = $img.replace(".png", $firstLoad + ".png");


        $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

        $(this).closest(".colorPage").find("label").removeClass("active");
        $(this).addClass("active");
    });
}





function productControl() {
    var $img = $(".detailContainer div:first-of-type aside figure img").attr("src");
    var $planter = $('input[name="option1"]').attr("id");
    // 1. planter 이름 당기기.
    var $color = $(".color .colorPage.activated li:first-of-type label").attr("class");

    var $tuneName = $(".detailContainer div:first-of-type aside figure img").attr("src").replace(".png", "_" + $planter + "_" + $color + ".png");
    // 2. planter 이름까지 조립되게 변수+변수

    $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

    $('input[name="option1"]').click(function () {
        $planter = $(this).attr("id");

        var colorTab = $(this).attr("data-option");

        $(".colorPage").removeClass("activated");
        $("#" + colorTab).addClass("activated");
    });
    // 4. planter 옵션세트 변경 할 수 있는 함수 필요.

    $(".color .colorPage li label").click(function () {
        $color = $(this).attr("class");

        $tuneName = $img.replace(".png", "_" + $planter + "_" + $color + ".png");
        // 3. planter 이름 변수가 가져와 져서 현재 $fistLoad와 조합되야함.

        $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

        $(this).closest(".colorPage").find("label").removeClass("active");
        $(this).addClass("active");
    });
}

디테일 선택 완성본
function productControl() {

    var $img = $(".detailContainer div:first-of-type aside figure img").attr("src");
    if ($('input[name="option1"]').length === 0) {
        return; // 그냥 종료 → 기본 이미지 그대로 유지
    }
    var $planter = $('input[name="option1"]:checked').attr("id");

    var colorTab = $('input[name="option1"]:checked').attr("data-option");
    $(".colorPage").removeClass("activated");
    $("#" + colorTab).addClass("activated");

    var $color = $(".colorPage.activated label:not(.out)").first().text();

    var $tuneName = $img.replace(".png", "_" + $planter + "_" + $color + ".png");
    $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

    $('input[name="option1"]').click(function () {
        $planter = $(this).attr("id");

        var colorTab = $(this).attr("data-option");
        $(".colorPage").removeClass("activated");
        $("#" + colorTab).addClass("activated");

        $color = $(".colorPage.activated label:not(.out)").first().text();

        $tuneName = $img.replace(".png", "_" + $planter + "_" + $color + ".png");
        $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);
    });

    $(".color .colorPage li label").click(function () {
        $color = $(this).text();

        $tuneName = $img.replace(".png", "_" + $planter + "_" + $color + ".png");
        $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

        $(this).closest(".colorPage").find("label").removeClass("active");
        $(this).addClass("active");
    });
}

    // 컬러 선택
    $(".color .colorPage li label").click(function () {
        $color = $(this).attr("class").split(" ")[0];

        $(".detailContainer div:first-of-type aside figure img")
            .attr("src", baseImg + "_" + $planter + "_" + $color + ".png");

        $(this).closest(".colorPage").find("label").removeClass("active");
        $(this).addClass("active");
    });
}
function countControl() {
  $(".qtyComponent .plus, .qtyComponent .minus").click(function () {
    var number = $(this).siblings("input[type='number']");
    var current = parseInt(number.val());

    if ($(this).hasClass("plus") && current < 99) {
      number.val(current + 1);
    }
    if ($(this).hasClass("minus") && current > 1) {
      number.val(current - 1);
    }
  });
}




// 과제
// function productControl() {
//     var $img = $(".detailContainer div:first-of-type aside figure img").attr("src");
//     var $planter = $('input[name="option1"]:checked').attr("id");
//     // 1. planter 이름 당기기.
//     var $color = $(".colorPage.activated label:not(.out)").first().text();

//     var $tuneName = $(".detailContainer div:first-of-type aside figure img").attr("src").replace(".png", "_" + $planter + "_" + $color + ".png");
//     // 2. planter 이름까지 조립되게 변수+변수
//     $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

//     $('input[name="option1"]').click(function () {
//         $planter = $(this).attr("id");

//         var colorTab = $(this).attr("data-option");

//         $(".colorPage").removeClass("activated");
//         $("#" + colorTab).addClass("activated");
//         // $color = $(".colorPage.activated li:first-of-type label").text();
//         $color = $(".colorPage.activated label:not(.out)").first().text();
//         $tuneName = $img.replace(".png", "_" + $planter + "_" + $color + ".png");
//         $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);
//     });
//     // 4. planter 옵션세트 변경 할 수 있는 함수 필요.

//     $(".color .colorPage li label").click(function () {
//         $color = $(this).attr("class");

//         $tuneName = $img.replace(".png", "_" + $planter + "_" + $color + ".png");
//         // 3. planter 이름 변수가 가져와 져서 현재 $fistLoad와 조합되야함.

//         $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

//         $(this).closest(".colorPage").find("label").removeClass("active");
//         $(this).addClass("active");
//     });
// }



function productControl() {

    var $img = $(".detailContainer div:first-of-type aside figure img").attr("src");

    var $planter = $('input[name="option1"]:checked').attr("id");

    var colorTab = $('input[name="option1"]:checked').attr("data-color");
    $(".colorPage").removeClass("activated");
    $("#" + colorTab).addClass("activated");

    var $color = $(".colorPage.activated label:not(.out)").first().text();

    var $tuneName = $img.replace(".png", "_" + $planter + "_" + $color + ".png");
    $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

    $('input[name="option1"]').click(function () {
        $planter = $(this).attr("id");

        var colorTab = $(this).attr("data-color");
        $(".colorPage").removeClass("activated");
        $("#" + colorTab).addClass("activated");

        $color = $(".colorPage.activated label:not(.out)").first().text();

        $tuneName = $img.replace(".png", "_" + $planter + "_" + $color + ".png");
        $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);
    });

    $(".color .colorPage li label").click(function () {
        $color = $(this).text();

        $tuneName = $img.replace(".png", "_" + $planter + "_" + $color + ".png");
        $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

        $(this).closest(".colorPage").find("label").removeClass("active");
        $(this).addClass("active");
    });
}