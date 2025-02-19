const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Fade,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.Every,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Plugins.Sprite.Acts.SetOpacity
	];
};
self.C3_JsPropNameTable = [
	{"01底圖": 0},
	{"01標題": 0},
	{Fade: 0},
	{"01標題2": 0},
	{"01點擊開始": 0},
	{"02底圖": 0},
	{"02標": 0},
	{"02標題2": 0},
	{"02標題": 0},
	{"02標2": 0},
	{"02標3": 0},
	{"10選單標題": 0},
	{"10選單小標1": 0},
	{"10選單小標2": 0},
	{"10選單小標3": 0},
	{Variable1: 0},
	{"11知識內容": 0},
	{"20選單標題": 0},
	{"20選單小標1": 0},
	{"20選單小標2": 0},
	{"20選單小標3": 0},
	{"30選單標題": 0},
	{"30選單小標1": 0},
	{"30選單小標2": 0},
	{"30選單小標3": 0},
	{"00屋子": 0},
	{"00回到上一頁": 0},
	{"00選單": 0},
	{"00聲音": 0},
	{"00下一頁": 0},
	{"00上一頁": 0},
	{Touch: 0},
	{Mouse: 0},
	{small: 0},
	{判斷頁碼: 0},
	{"11頁數": 0}
];

self.InstanceType = {
	_01底圖: class extends self.ISpriteInstance {},
	_01標題: class extends self.ISpriteInstance {},
	_01標題2: class extends self.ISpriteInstance {},
	_01點擊開始: class extends self.ITextInstance {},
	_02底圖: class extends self.ISpriteInstance {},
	_02標: class extends self.ISpriteInstance {},
	_02標題2: class extends self.ISpriteInstance {},
	_02標題: class extends self.ISpriteInstance {},
	_02標2: class extends self.ISpriteInstance {},
	_02標3: class extends self.ISpriteInstance {},
	_10選單標題: class extends self.ISpriteInstance {},
	_10選單小標1: class extends self.ISpriteInstance {},
	_10選單小標2: class extends self.ISpriteInstance {},
	_10選單小標3: class extends self.ISpriteInstance {},
	_11知識內容: class extends self.ISpriteInstance {},
	_20選單標題: class extends self.ISpriteInstance {},
	_20選單小標1: class extends self.ISpriteInstance {},
	_20選單小標2: class extends self.ISpriteInstance {},
	_20選單小標3: class extends self.ISpriteInstance {},
	_30選單標題: class extends self.ISpriteInstance {},
	_30選單小標1: class extends self.ISpriteInstance {},
	_30選單小標2: class extends self.ISpriteInstance {},
	_30選單小標3: class extends self.ISpriteInstance {},
	_00屋子: class extends self.ISpriteInstance {},
	_00回到上一頁: class extends self.ISpriteInstance {},
	_00選單: class extends self.ISpriteInstance {},
	_00聲音: class extends self.ISpriteInstance {},
	_00下一頁: class extends self.ISpriteInstance {},
	_00上一頁: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {}
}