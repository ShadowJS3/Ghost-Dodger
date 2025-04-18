const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Anchor,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Behaviors.Bullet,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Audio,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{Âncora: 0},
	{background: 0},
	{TitleMenu: 0},
	{play: 0},
	{History: 0},
	{Mouse: 0},
	{Teclado: 0},
	{BackgroundGame: 0},
	{Projétil: 0},
	{Ghost: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{Plataforma: 0},
	{Jack: 0},
	{GhostUp: 0},
	{Sólido: 0},
	{block: 0},
	{Áudio: 0},
	{Pirulito: 0},
	{TextPonto: 0},
	{backgroudHist: 0},
	{textHistory: 0},
	{voltarMenu: 0},
	{backgroundGameOver: 0},
	{TextMenuGameOver: 0},
	{pontos: 0}
];

self.InstanceType = {
	background: class extends self.ISpriteInstance {},
	TitleMenu: class extends self.ITextInstance {},
	play: class extends self.ITextInstance {},
	History: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	Teclado: class extends self.IInstance {},
	BackgroundGame: class extends self.ISpriteInstance {},
	Ghost: class extends self.ISpriteInstance {},
	Jack: class extends self.ISpriteInstance {},
	GhostUp: class extends self.ISpriteInstance {},
	block: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Pirulito: class extends self.ISpriteInstance {},
	TextPonto: class extends self.ITextInstance {},
	backgroudHist: class extends self.ISpriteInstance {},
	textHistory: class extends self.ITextInstance {},
	voltarMenu: class extends self.ITextInstance {},
	backgroundGameOver: class extends self.ISpriteInstance {},
	TextMenuGameOver: class extends self.ITextInstance {}
}