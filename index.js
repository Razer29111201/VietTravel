

var header = document.querySelector('#header')
console.log(header, footer);
var head = document.createElement('div')
head.innerHTML = (`
<div class="grid">
    <div class="header_top">
        <div class="header_logo">
            <i class='bx bx-menu'></i>
            <a href="../index.html"><img class="logo" src="../anh.img/VietTraveleeee.png" alt=""></a>

        </div>
        <div class="header_navbar">
            <ul>
                <li>Tải Ứng Dụng</li>
                <li>Hợp Tác Với Chúng Tôi</li>
                <li>Đã Lưu</li>
                <li>Đặt Chỗ Của Tối</li>
                <li>VND</li>
              
                <li><button class="acc login">Đăng Nhập</button></li>
                <li><button  class="acc register">Đăng Ký</button></li>
                
                
            </ul>
        </div>
    </div>


    <div class="header_botom"></div>


</div>

<div class="header_menu">
    <div class="grid">
        <ul class="menu_list">
            <li class="menu_item">Vận chuyển
                <ul class="menu_dropdown">
                    <li class="dropdown_item">Vé máy bay</li>
                    <li class="dropdown_item">Combo tiết kiệm</li>
                    <li class="dropdown_item">Đưa đón sân bay</li>
                    <li class="dropdown_item">Cho thuê xe</li>
                    <li class="dropdown_item">vé xe khách</li>
                    <li class="dropdown_item">Tình trạng chuyến bay</li>
                    <li class="dropdown_item">Thông tin giá vé </li>
                </ul>
            </li>

            <li class="menu_item">Chỗ ở
                <ul class="menu_dropdown">
                    <li class="dropdown_item">Khách sạn</li>
                    <li class="dropdown_item">Combo tích kiệm</li>
                </ul>
            </li>


            <li class="menu_item">Hoạt động và giải trí
                <ul class="menu_dropdown">
                    <li class="dropdown_item">Xperience</li>
                    <li class="dropdown_item">Điểm thăm quan</li>
                    <li class="dropdown_item">Tour</li>
                </ul>
            </li>
            <li class="menu_item">Sản phẩm bổ sung
                <ul class="menu_dropdown">
                    <li class="dropdown_item">Voucher</li>
                    <li class="dropdown_item">Điểm tích thưởng</li>
                </ul>
            </li>
        </ul>
    </div>
</div>

<div class="center_conten">

</div>`)


var footer = document.querySelector('#footer')
var foot = document.createElement('div')
foot.innerHTML = (`<div class="grid">
<h3>Đối Tác Thanh Toán</h3>
<div class="row">
    <div class="col doitac footer_doitac">

        <div class=" footer_img">
            <img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img">
            <img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img">
            <img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2022/07/08/1657286372391-45dab552eed9b787bfc93547e26c6d87.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2022/07/08/1657286372391-45dab552eed9b787bfc93547e26c6d87.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/07/08/1657286372391-45dab552eed9b787bfc93547e26c6d87.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/07/08/1657286372391-45dab552eed9b787bfc93547e26c6d87.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>
        <div class=" footer_img"><img importance="low" loading="lazy"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=h-19,q-75,w-57"
                srcset="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=h-19,q-75,w-57 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=dpr-2,h-19,q-75,w-57 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=dpr-3,h-19,q-75,w-57 3x"
                decoding="async" width="57" height="19" style="object-fit: fill; object-position: 50% 50%;">
        </div>

    </div>
    <div class="col m-5 footer-list">
        <h3>Về Viettravel</h3>
        <p>Cách đặt chỗ</p>
        <p>Liên hệ chúng tôi</p>
        <p>Trợ giúp</p>
        <p>Tuyển dụng</p>

        <h3>Theo dõi chúng tôi trên</h3>
        <p>Facebook</p>
        <p>Instargram</p>
        <p>Youtube</p>
        <p>Tiktok</p>
        <p>Telegram</p>
    </div>
    <div class="col m-5 footer-list">
        <h3>Sản Phẩm</h3>
        <p>Vé máy bay</p>
        <p>Khách sạn</p>
        <p>Combo tiết kiệm</p>
        <p>Đưa đón sân bay</p>
        <p>Xperience</p>

        <p>Biệt thự</p>
        <p>Căn hộ</p>
        <p>Car Rental</p>

    </div>
    <div class="col m-5 footer-list">
        <h3>Khác</h3>
        <p>Traveloka Affiliate</p>
        <p>Traveloka Blog</p>
        <p>Chính sách quyền riêng tư</p>
        <p>Điều khoản & Điều kiện</p>
        <p>Quy chế hoạt động</p>
        <p>Đăng ký nơi nghỉ của bạn</p>
        <p>Đăng ký doanh nghiệp hoạt động du lịch của bạn</p>
        <p>Khu vực báo chí
        </p>
    </div>

</div>

</div>
<div class="footer_end">
<p> Công ty TNHH du lịch VietTrave Việt Nam. <br>
    Mã số DN: 0199999999. Tòa nhà FLC, 123P.7, Quận Ba Đình, Hà Nội. <br>
    Số điện thoại: 099.9999.9999 <br>
    Email: VietTrave@gmail.vn
</p>
<p>Copyright © 2023 VietTraveL. All rights reserved</p>
</div>`)

header.appendChild(head)
footer.appendChild(foot)




var login = document.querySelector('#login')
var loginbtn = document.querySelector('.login')
var exit = document.querySelector('.exit')
var login_bg = document.querySelector('.login_bg')
var register = document.querySelector('#register')
var registerbtn = document.querySelector('.register')
var cancell = document.querySelector('.cancel')
var register_bg = document.querySelector('.register_bg')


const cancel = (btn) => {
    btn.classList.add('hiden')
}


if (loginbtn) {
    loginbtn.onclick = () => {
        console.log('a');
        login.classList.remove('hiden')
    }
}

exit.onclick = () => {

    cancel(login)
}
if (registerbtn) {
    registerbtn.onclick = () => {
        console.log('a');
        register.classList.remove('hiden')
    }
}


cancell.onclick = () => {
    cancel(register)
}


var loginbtn = document.getElementById('loginbtn')
var btnress = document.getElementById('btn-submit')

var user = document.getElementById('user')
var pass = document.getElementById('pass')
var name = document.getElementById('name')
var userdk = document.getElementById('userdk')
var nber = document.getElementById('nber')
var email = document.getElementById('email')
var passdk = document.getElementById('passdk')
var role = 0


var date = new Date


var random = Math.floor(Math.random() * 10000);


btnress.onclick = () => {

    var arr =
    {
        user: userdk.value,
        pass: passdk.value,
        role: role
    }

    var value = JSON.stringify(arr)
    window.localStorage.setItem("key" + random, value)

}
var datakey = localStorage.length
var key = []
for (var i = 0; i < datakey; i++) {
    key.push(localStorage.key(i))
}
console.log(key);


loginbtn.onclick = () => {
    var dataloop = []
    key.forEach(e => {
        var datakey = window.localStorage.getItem(e)

        dataloop.push(JSON.parse(datakey))
    })



    dataloop.forEach(e => {
        console.log(e);

        if (e.user == user.value && e.pass == pass.value) {
            alert("Đăng nhập thành công")
            setCookie('key', e.user, 1)
        }
        else {
            console.log("Thất bại")
        }
    })
    console.log(user);



}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

console.log(document.cookie);

if (getCookie('key').length > 0) {

}
