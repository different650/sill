$(function () {
    floatingControl();// panel & popup
    toggleControl();// toggle(search)
    mainSlider();
    mobileMenu();
    mobileFooter("footer > div:nth-of-type(2) > div:not(:first-of-type) > h3");
    eyeIcon();
    nestedPopup();
    filterControl();
    mobileFilter();
    listaccControl(".listContainer .filterPanel fieldset legend" );
    listHover();
    PromotionSlider();
    joySlider();
    backControl();
    tabMenu();
    accControl(".accComponent li h3");

    imgSwap();
    // colorTabUI();
    productControl();
    countControl();
});

// panel & popup
function floatingControl() {
    var currentTarget = null;
    $("[type='button']").click(function () {
        if ($(this).attr("data-panel")) {
            currentTarget = "." + $(this).attr("data-panel");
            $(currentTarget).addClass("active");
        } else if ($(this).attr("data-popup")) {
            currentTarget = "." + $(this).attr("data-popup");
            $(currentTarget).addClass("active");
        }
    });
    // 여는파트
    $('[class$="CloseBtn"]').click(function () {
        // 위 대상은 $=CloseBtn으로 정리
        $(currentTarget).removeClass("active");
    });
    //닫는파트
}

// toggle(search)
function toggleControl() {
    var toggleTarget = null;
    $("[type='button']").click(function () {
        if ($(this).attr("data-toggle")) {
            toggleTarget = "." + $(this).attr("data-toggle");
            $(toggleTarget).removeClass("active").toggle();
        }
    });
}

// main bxSlider
function mainSlider() {
    $(".slider").bxSlider({
        maxSlides: 3,//보이는 개체수
        minSlides: 1,
        moveSlides: 1,//개체가 하나씩 넘어가게
        slideWidth: 310,//개체사이즈
        slideMargin: 25, //개체사이 간격
        pager: true, //? default: true. pager 켜기/끄기
        pagerType: 'short', //? default : full-circle, short-count
        infiniteLoop: false, //? default : true. slide간 전환 무한반복.(fade)
    });
}

// mobile menu
function mobileMenu() {
    $("nav > ul > li").mouseenter(function () {
        $(this).find(".sub").stop(true, true).slideDown();
    });

    $("nav > ul > li").mouseleave(function () {
        $(this).find(".sub").stop(true, true).slideUp();
    });
}

// mobile footer
function mobileFooter(target) {
    $(target).click(function () {
        $(this).toggleClass("active");
    });
}




// password
function eyeIcon() {
    // ? target.attr() = 대상의 모든 attr을 불러와 / target.attr("attr이름") = 대상의 해당 attr을 불러와/
    // ? target.attr("attr이름","attr값") = 대상의 해당 attr 값을 바꿔라
    var $toggleTarget = $(".material-symbols-outlined.toggleVisible");
    var $toggleInput = $("#password");
    var toggleStatus = false;

    $toggleTarget.click(function () {
        toggleStatus = !toggleStatus;

        if (toggleStatus == true) {
            $toggleTarget.val("visibility");
            $toggleInput.attr("type", "text");
        } else {
            $toggleTarget.val("visibility_off");
            $toggleInput.attr("type", "password");
        }
    });
}

// 2단 팝업
function nestedPopup() {
    var firstPopup = null;
    var lastPopup = null;
    $("[type='button']").click(function () {
        if ($(this).attr("data-nested")) {
            firstPopup = "." + $(this).attr("data-nested");
            $(firstPopup).addClass("active");
        }
        // 1단 팝업 열기
    });
    $("[type='button']").click(function () {
        if ($(this).attr("data-stacked")) {
            lastPopup = "." + $(this).attr("data-stacked");
            $(lastPopup).addClass("active");
        }
        // 2단 팝업 열기
        else if ($(this).attr("data-sub")) {
            lastPopup = "." + $(this).attr("data-sub");
            $(lastPopup).toggleClass("active");
        }
        // 2단 팝업 토글
    });
    $(".bCloseBtn, .yesCloseBtn").click(function () {
        $(firstPopup).removeClass("active");
        $(lastPopup).removeClass("active");
    });
    // 2단 모두 닫힘
    $(".noCloseBtn").click(function () {
        $(lastPopup).removeClass("active");
    });
    //  2단 한단 닫힘
    // Jquery - siblings, find, parents, child...
}





// list fiter
function filterControl() {
    var filterPopup = null;
    $("[data-filter]").click(function () {
        if ($(this).attr("data-filter")) {
            filterPopup = "." + $(this).attr("data-filter");
            $(filterPopup).toggleClass("active");
            $(this).toggleClass("active");
        }
    });
    // 열기
    $(".bCloseBtn").click(function () {
        $(filterPopup).removeClass("active");
        $("[data-filter]").removeClass("active");
    });
    // 닫기
    $(".uln").click(function () {
        $(".filterPanel input[type='checkbox']").prop("checked", false);
    });
    // 체크표시 초기화
}

// mobile filter
function mobileFilter() {
    $(".filterPanel fieldset legend").click(function () {
        $(this).siblings(".filterSub").toggleClass("active");
    });
}

// mobile list accComponent
function listaccControl(target) {
    $(target).click(function () {
        $(this).toggleClass("active");
    });
}

// listPage hover
function listHover() {
    $("li figure img").each(function () {
        var listimg = $(this);
        var original = listimg.attr("src");
        listimg.on("mouseenter", function () {
            listimg.attr("src", original.replace(".png", "_hover.png"));
        });
        listimg.on("mouseleave", function () {
            listimg.attr("src", original);
        });
    });
}

//listPage Promotion bxSlider
function PromotionSlider() {
    $(".recommendSlider").bxSlider({
        maxSlides: 1,//보이는 개체수
        minSlides: 1,
        moveSlides: 1,//개체가 하나씩 넘어가게
        slideWidth: 590,//개체사이즈
        // slideMargin: 25, //개체사이 간격
        pager: true, //? default: true. pager 켜기/끄기
        pagerType: 'short', //? default : full-circle, short-count
        infiniteLoop: false, //? default : true. slide간 전환 무한반복.(fade)
    });
}

//listPage joy bxSlider
function joySlider() {
    $(".enjoySlider").bxSlider({
        maxSlides: 4,//보이는 개체수
        minSlides: 1,
        moveSlides: 1,//개체가 하나씩 넘어가게
        slideWidth: 336,//개체사이즈
        slideMargin: 20, //개체사이 간격
        pager: true, //? default: true. pager 켜기/끄기
        pagerType: 'short', //? default : full-circle, short-count
        infiniteLoop: false, //? default : true. slide간 전환 무한반복.(fade)
    });
}





// back button
function backControl() {
    $(".backBtn").click(function () {
        history.back();
    });
}

// tab menu
function tabMenu() {
    var activeTab = null;
    $(".tabMenu li, [data-tabNumb]").click(function () {
        activeTab = $(this).attr("data-tabNumb");
        $(".tabMenu li, [data-tabNumb]").removeClass("activated");
        $(this).addClass("activated");
        $(".tabPage").removeClass("activated");
        $("#" + activeTab).addClass("activated");
    });
}

// accComponent
function accControl(target) {
    $(target).click(function () {
        $(this).toggleClass("active");
    });
}

// 이미 최상단에 $(function(){}) = $(document).ready(function(){}) 이기 때문에 실행문은 위에 다 정리해서 놓으면 되고 외 function들만 밖에 위치 해야함

// 그 이후에 남아있는 잔여 script기능 구현해오되 잘 안되는 구간은 따로 정리해서 가져오기


// detailed Image
function imgSwap() {
    var imgSrc = null;

    $(".detailedImage img").click(function () {

        imgSrc = $(this).attr("src");
        // 1. thumbNail click 시 -> 자신의 attr중 src값을 빼서 저장.
        $(".detailContainer aside figure img").attr("src", imgSrc);
        // 2. 크게 보이는 이미지 대상에 attr중 src값을 1번의 값으로 바꿔 끼기
        // * animate-> 함수 사용하고 싶으면 사용해도 됨.

    });
}

// function colorTabUI() {
//     $('input[name="option1"]').on("click", function () {
//         var colorTab = $(this).attr("data-color");

//         $(".colorPage").removeClass("activated");
//         $("#" + colorTab).addClass("activated");
//     });
// }

function productControl() {

    var $img = $(".detailContainer div:first-of-type aside figure img").attr("src");

    var $option1 = $('input[name="option1"]:checked').attr("id");

    var optionTab = $('input[name="option1"]:checked').attr("data-option");
    $(".colorPage").removeClass("activated");
    $("#" + optionTab).addClass("activated");

    // 두번째 옵션이 없는 경우 고려
    var $option2 = $(".colorPage.activated label:not(.out)").first().text() || "";

    // 옵션2가 있으면 _옵션2 붙이고, 없으면 옵션1만
    var $tuneName = $img.replace(".png", "_" + $option1 + ($option2 ? "_" + $option2 : "") + ".png");
    $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

    $('input[name="option1"]').click(function () {
        $option1 = $(this).attr("id");

        var optionTab = $(this).attr("data-option");
        $(".colorPage").removeClass("activated");
        $("#" + optionTab).addClass("activated");

        $option2 = $(".colorPage.activated label:not(.out)").first().text() || "";

        $tuneName = $img.replace(".png", "_" + $option1 + ($option2 ? "_" + $option2 : "") + ".png");
        $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);
    });

    $(".color .colorPage li label").click(function () {
        $option2 = $(this).text();

        $tuneName = $img.replace(".png", "_" + $option1 + ($option2 ? "_" + $option2 : "") + ".png");
        $(".detailContainer div:first-of-type aside figure img").attr("src", $tuneName);

        $(this).closest(".colorPage").find("label").removeClass("active");
        $(this).addClass("active");
    });
}


//참고
//   var $img =$(".showProd img").attr("src");
//     var $firstLoad = $(".prodColor div button:first-child img").attr("alt");
//     var $tuneName = $(".showProd img").attr("src").replace(".jpg", $firstLoad + ".jpg");
//     $(".showProd img").attr("src", $tuneName);

//     $(".prodColor div button img").click(function(){
//         $firstLoad = $(this).attr("alt");
//         $tuneName = $img.replace(".jpg", $firstLoad + ".jpg");
//         $(".showProd img").attr("src", $tuneName);

//         $(".prodColor div button").click(function(){
//             $(this).siblings().removeClass("active");
//             $(this).addClass("active");
//         });




function countControl() {
    // 1. 변수 - 현재 #qtyValue의 value를 가져와 담는다.
    // 2. 클릭이벤트 2개 -> +, -
    // 3. + 이벤트함수에서는 1번변수 당겨서 value에 ++
    // 4. - 이벤트함수에서는 1번함수 당겨서 value에 --

  $(".qtyComponent").each(function(){

    var $countNum = $(this).find("input[type='number']"); 

    $(this).find("input[type='button']").click(function(){ 

      var count = parseInt($countNum.val()); 

      if ($(this).val() == "+") { 
         if (count < 99) count++;    
      }

      if ($(this).val() == "-") { 
        if (count > 1) count--;    
      }

      $countNum.val(count);
    });
  });
}


// function qtyComponent(){
//     var $countSet = $(".qtyComponent span");

//     $(".qtyComponent input").click(function(){
//         var $countText = parseInt($($countSet).text());
        
//         if($(this).val() == "+"){
//             if($countText < 99){
//                 $countText++;
//             }
//         }else if($(this).val() == "-"){
//             if(1 < $countText){
//                 $countText--;
//             }
//         }
//         $countSet.text($countText);
//     });
// }
// function tooltipToggle(target) {
//   $(target).hover(
//     function() { $(this).next(".tooltip").show(); },
//     function() { $(this).next(".tooltip").hide(); }
//   );
// }





