window.onload = function () {
	$().getClass('member').hover(function () {
		$().getClass('member_ul').css('display', 'block');
	},function () {
		$().getClass('member_ul').css('display', 'none');
	},$().getClass('member_ul').hover(function () {
		$().getClass('member_ul').css('display', 'block');
	}, function () {
		$().getClass('member_ul').css('display', 'none');
	}));
};
















