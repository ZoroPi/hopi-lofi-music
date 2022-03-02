let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
	{
		name: "Hát Cho Em Mỗi Ngày",
		path: "music/HatChoEmMoiNgay.mp3",
		img: "img/anh1.jpg",
		singer: "Eddy Kiên"
	},
	{
		name: "Thì Thôi",
		path: "music/ThiThoiLofi.mp3",
		img: "img/anh2.jpg",
		singer: "Reddy"
	},
	{
		name: "Ai Chung Tình Được Mãi",
		path: "music/AiChungTinhDuocMaiLofi.mp3",
		img: "img/anh3.jpg",
		singer: "Đinh Tùng Huy"
	},
	{
		name: "Thay Lòng",
		path: "music/ThayLong.mp3",
		img: "img/anh4.jpg",
		singer: "Nal - Tvk - Will Music"
	},
	{
		name: "Biết Tìm Đâu",
		path: "music/BietTimDauLofi.mp3",
		img: "img/anh5.jpg",
		singer: "Tiến Tới - Freak D"
	},
	{
		name: "Chỉ Muốn Bên Em Lúc Này",
		path: "music/ChiMuonBenEmLucNay.mp3",
		img: "img/anh6.jpg",
		singer: "Freak D"
	},
	{
		name: "Cô Độc Vương",
		path: "music/CoDocVuongLofi.mp3",
		img: "img/anh7.jpg",
		singer: "Thiên Tú"
	},
	{
		name: "Chỉ Là Không Cùng Nhau",
		path: "music/ChiLaKhongCungNhauLofi.mp3",
		img: "img/anh8.jpg",
		singer: "Tăng Phúc"
	},
	{
		name: "Cô Đơn Dành Cho Ai",
		path: "music/CoDonDanhChoAiLofi.mp3",
		img: "img/anh9.jpg",
		singer: "Nal - Lee Ken"
	},
	{
		name: "Đế Vương",
		path: "music/DeVuongLofi.mp3",
		img: "img/anh10.jpg",
		singer: "Dunghoangpham"
	},
	{
		name: "Đường Tôi Chờ Em Về",
		path: "music/DuongToiChoEmVeLofi.mp3",
		img: "img/anh11.jpg",
		singer: "Freak D"
	},
	{
		name: "Người Lạ Thoáng Qua",
		path: "music/NguoiLaThoangQuaLofi.mp3",
		img: "img/anh12.jpg",
		singer: "Đinh Tùng Huy"
	},
	{
		name: "Kẻ Cô Đơn Trong Thành Phó",
		path: "music/KeCoDonTrongThanhPhoLofi.mp3",
		img: "img/anh13.jpg",
		singer: "Khải - Xén"
	},
	{
		name: "Họ Yêu ai Mất Rồi",
		path: "music/HoYeuAiMatRoiLofi.mp3",
		img: "img/anh14.jpg",
		singer: "Doãn Hiếu"
	},
	{
		name: "Em Hứa Thế Nào",
		path: "music/EmHuaTheNaoLofi.mp3",
		img: "img/anh15.jpg",
		singer: "Như Việt"
	},
	{
		name: "Rồi Tới Luôn",
		path: "music/RoiToiLuonLofi.mp3",
		img: "img/anh16.jpg",
		singer: "Nal"
	},
	{
		name: "Ví Dầu Đưa Dâu",
		path: "music/ViDauDuaDauLofi.mp3",
		img: "img/anh17.jpg",
		singer: "Duy Khiêm - Diệu Kiên"
	},
	{
		name: "Thương Thầm",
		path: "music/ThuongThamLofi.mp3",
		img: "img/anh18.jpg",
		singer: "NB3 Hoài Bảo"
	},
	{
		name: "Khuê Mộc Lang",
		path: "music/KhueMocLangLofi.mp3",
		img: "img/anh19.jpg",
		singer: "Hương Ly - Jombie"
	},
	{
		name: "Đổi Tình Đổi Áo",
		path: "music/DoiTinhDoiAoLofi.mp3",
		img: "img/anh20.jpg",
		singer: "Gia Huy"
	},
	{
		name: "Lưu Số Em Đi",
		path: "music/LuuSoEmDiLofi.mp3",
		img: "img/anh21.jpg",
		singer: "Huỳnh Văn - Vũ Phụng Tiên"
	},
	{
		name: "Anh Về Miền Tây",
		path: "music/AnhVeMienTayLofi.mp3",
		img: "img/anh22.jpg",
		singer: "NB3 Hoài Bảo"
	},
	{
		name: "Chiều Đồng Quê",
		path: "music/ChieuDongQueLofi.mp3",
		img: "img/anh23.jpg",
		singer: "H2K"
	},
	{
		name: "Chiều Thứ Hai",
		path: "music/ChieuThuHaiLofi.mp3",
		img: "img/anh24.jpg",
		singer: "REDT - Minn"
	},
	{
		name: "Có Hẹn Với Thanh Xuân",
		path: "music/CoHenVoiThanhXuanLofi.mp3",
		img: "img/anh25.jpg",
		singer: "Monstar - Ryan"
	},
	{
		name: "Đoạn Tuyệt Nàng Đi",
		path: "music/DoanTuyetNangDiLofi.mp3",
		img: "img/anh26.jpg",
		singer: "Phát Huy T4 - KProx"
	},
	{
		name: "Đổi Tình Đổi Áo Đổi Anh",
		path: "music/DoiTinhDoiAoDoiAnhLofi.mp3",
		img: "img/anh27.jpg",
		singer: "Gia Huy"
	},
	{
		name: "Gõ Cửa Trái Tim",
		path: "music/GoCuaTraiTimLofi.mp3",
		img: "img/anh28.jpg",
		singer: "H2K - Ryan"
	},
	{
		name: "Nô Lệ Tình Yêu",
		path: "music/NoLeTinhYeuLofi.mp3",
		img: "img/anh29.jpg",
		singer: "Viết Long Cover"
	},
	{
		name: "Tay Trái Chỉ Trăng",
		path: "music/TayTraiChiTrangLofi.mp3",
		img: "img/anh30.jpg",
		singer: "Nam Em"
	},
	{
		name: "Tháng Năm",
		path: "music/ThangNamLofi.mp3",
		img: "img/anh31.jpg",
		singer: "Soobin - Freak D"
	},
	{
		name: "Yêu Đừng Sợ Đau",
		path: "music/YeuDungSoDauLofi.mp3",
		img: "img/anh32.jpg",
		singer: "Ngô Lan Hương"
	},
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
function justplay(){
	if(Playing_song==false){
		playsong();

	}else{
			pausesong();
	}
}


// reset song slider
function reset_slider(){
	slider.value = 0;
}

// play song
function playsong(){
	track.play();
	Playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
		autoplay = 0;
		auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
		autoplay = 1;
		auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
	if(!isNaN(track.duration)){
		position = track.currentTime * (100 / track.duration);
		slider.value =  position;
	}
       // function will run when the song is over
    if(track.ended){
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if(autoplay==1){
			index_no += 1;
			load_track(index_no);
			playsong();
        }
	}
}