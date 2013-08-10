/************************************************************************/
/* Define core Dojo features                                            */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

// dojo/ready

declare module Dojo
{
	interface Ready
	{
		(priority: number, context: Object, callback: SimpleAction): void;
		(context: Object, callback: SimpleAction): void;
		(callback: SimpleAction): void;
	}
}
declare module "dojo/ready"
{
	var ready: Dojo.Ready;
	export = ready;
}

// dojo/domReady

declare module Dojo
{
	interface DomReady
	{
		(callback: SimpleAction): void;
	}
}
declare module "dojo/domReady"
{
	var domReady: Dojo.DomReady;
	export = domReady;
}

// dojo/_base/array

declare module Dojo
{
	interface Array
	{
		indexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;
		lastIndexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;

		forEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => void , thisObject?: Object): void;
		forEach<T>(array: T[], callback: string, thisObject?: Object): void;
		forEach<T>(array: string, callback: (item: string, index: number, array: string) => void , thisObject?: Object): void;
		forEach<T>(array: string, callback: string, thisObject?: Object): void;

		filter<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean, thisObject?: Object): T[];
		filter<T>(array: T[], callback: string, thisObject?: Object): T[];
		filter(array: string, callback: (item: string, index: number, array: string) => boolean, thisObject?: Object): string[];
		filter(array: string, callback: string, thisObject?: Object): string[];

		map<T, V>(array: T[], callback: (item: T, index: number, array: T[]) => V, thisObject?: Object): V[];
		map<T, V>(array: T[], callback: string, thisObject?: Object): V[];
		map<V>(array: string, callback: (item: string, index: number, array: string) => V, thisObject?: Object): V[];
		map<V>(array: string, callback: string, thisObject?: Object): V[];

		some<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean, thisObject?: Object): boolean;
		some<T>(array: T[], callback: string, thisObject?: Object): boolean;
		some(array: string, callback: (item: string, index: number, array: string) => boolean, thisObject?: Object): boolean;
		some(array: string, callback: string, thisObject?: Object): boolean;

		every<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean, thisObject?: Object): boolean;
		every<T>(array: T[], callback: string, thisObject?: Object): boolean;
		every(array: string, callback: (item: string, index: number, array: string) => boolean, thisObject?: Object): boolean;
		every(array: string, callback: string, thisObject?: Object): boolean;
	}
}
declare module "dojo/_base/array"
{
	var array: Dojo.Array;
	export = array;
}

// dojo/_base/browser

declare module "dojo/_base/browser"
{
}

// dojo/_base/Color

declare module Dojo
{
	// We need this in order to prevent a compiler error
	class _Color
	{
		constructor();
		constructor(colors: any[]);
		constructor(color: string);
		constructor(color: Object);

		a: number;
		r: number;
		g: number;
		b: number;
	}

	class Color extends _Color { }

	module Color
	{
		interface NamedColors
		{
			"aliceblue": number[];
			"antiquewhite": number[];
			"aquamarine": number[];
			"azure": number[];
			"beige": number[];
			"bisque": number[];
			"blanchedalmond": number[];
			"blueviolet": number[];
			"brown": number[];
			"burlywood": number[];
			"cadetblue": number[];
			"chartreuse": number[];
			"chocolate": number[];
			"coral": number[];
			"cornflowerblue": number[];
			"cornsilk": number[];
			"crimson": number[];
			"cyan": number[];
			"darkblue": number[];
			"darkcyan": number[];
			"darkgoldenrod": number[];
			"darkgray": number[];
			"darkgreen": number[];
			"darkgrey": number[];
			"darkkhaki": number[];
			"darkmagenta": number[];
			"darkolivegreen": number[];
			"darkorange": number[];
			"darkorchid": number[];
			"darkred": number[];
			"darksalmon": number[];
			"darkseagreen": number[];
			"darkslateblue": number[];
			"darkslategray": number[];
			"darkslategrey": number[];
			"darkturquoise": number[];
			"darkviolet": number[];
			"deeppink": number[];
			"deepskyblue": number[];
			"dimgray": number[];
			"dimgrey": number[];
			"dodgerblue": number[];
			"firebrick": number[];
			"floralwhite": number[];
			"forestgreen": number[];
			"gainsboro": number[];
			"ghostwhite": number[];
			"gold": number[];
			"goldenrod": number[];
			"greenyellow": number[];
			"grey": number[];
			"honeydew": number[];
			"hotpink": number[];
			"indianred": number[];
			"indigo": number[];
			"ivory": number[];
			"khaki": number[];
			"lavender": number[];
			"lavenderblush": number[];
			"lawngreen": number[];
			"lemonchiffon": number[];
			"lightblue": number[];
			"lightcoral": number[];
			"lightcyan": number[];
			"lightgoldenrodyellow": number[];
			"lightgray": number[];
			"lightgreen": number[];
			"lightgrey": number[];
			"lightpink": number[];
			"lightsalmon": number[];
			"lightseagreen": number[];
			"lightskyblue": number[];
			"lightslategray": number[];
			"lightslategrey": number[];
			"lightsteelblue": number[];
			"lightyellow": number[];
			"limegreen": number[];
			"linen": number[];
			"magenta": number[];
			"mediumaquamarine": number[];
			"mediumblue": number[];
			"mediumorchid": number[];
			"mediumpurple": number[];
			"mediumseagreen": number[];
			"mediumslateblue": number[];
			"mediumspringgreen": number[];
			"mediumturquoise": number[];
			"mediumvioletred": number[];
			"midnightblue": number[];
			"mintcream": number[];
			"mistyrose": number[];
			"moccasin": number[];
			"navajowhite": number[];
			"oldlace": number[];
			"olivedrab": number[];
			"orange": number[];
			"orangered": number[];
			"orchid": number[];
			"palegoldenrod": number[];
			"palegreen": number[];
			"paleturquoise": number[];
			"palevioletred": number[];
			"papayawhip": number[];
			"peachpuff": number[];
			"peru": number[];
			"pink": number[];
			"plum": number[];
			"powderblue": number[];
			"rosybrown": number[];
			"royalblue": number[];
			"saddlebrown": number[];
			"salmon": number[];
			"sandybrown": number[];
			"seagreen": number[];
			"seashell": number[];
			"sienna": number[];
			"skyblue": number[];
			"slateblue": number[];
			"slategray": number[];
			"slategrey": number[];
			"snow": number[];
			"springgreen": number[];
			"steelblue": number[];
			"tan": number[];
			"thistle": number[];
			"tomato": number[];
			"turquoise": number[];
			"violet": number[];
			"wheat": number[];
			"whitesmoke": number[];
			"yellowgreen": number[];
		}

		var named: NamedColors;
	}
}
declare module "dojo/_base/Color"
{
	class Color extends Dojo._Color { }

	module Color
	{
		var named: Dojo.Color.NamedColors;
	}

	export = Color;
}

// dojo/_base/config

declare module Dojo
{
	interface Config
	{
		addOnLoad: Object;	// TODO
		afterOnLoad: string;
		baseUrl: string;
		callback: Function;
		debugContainerId: string;
		debugHeight: number;
		defaultDuration: number;
		deferredInstrumentation: string;
		deps: string[];
		dojoBlankHtmlUrl: string;
		extraLocale: string[];
		ioPublish: boolean;
		isDebug: boolean;
		locale: string;
		modulePaths: { [path: string]: string; };
		parseOnLoad: boolean;
		require: string[];
		transparentColor: number[];
		urchin: string;
		useCustomLogger: boolean;
		useDeferredInstrumentation: Object;
	}
}
declare module "dojo/_base/config"
{
	var config: Dojo.Config;
	export = config;
}

// dojo/_base/fx

declare module Dojo
{
	module Fx
	{
		interface BaseCreateOptions
		{
			node: any;
			duration?: number;
			easing?: EasingFunction;
		}
		interface CreateOptions extends BaseCreateOptions
		{
			properties: StylesMap;
		}
		interface Base
		{
			anim(nodeId: string, properties: PropertiesMap, duration?: number, easing?: EasingFunction, onEnd?: SimpleAction, delay?: number): dojo.Animation;
			anim(node: HTMLElement, properties: PropertiesMap, duration?: number, easing?: EasingFunction, onEnd?: SimpleAction, delay?: number): dojo.Animation;

			animateProperty(args: CreateOptions): dojo.Animation;
			fadeIn(args: BaseCreateOptions): dojo.Animation;
			fadeOut(args: BaseCreateOptions): dojo.Animation;
		}
	}
}

declare module "dojo/_base/fx"
{
	var fx: Dojo.Fx.Base;
	export = fx;
}

// dojo/_base/lang

declare module Dojo
{
	interface Lang
	{
		clone<T>(obj: T): T;
		delegate(obj: Object, props: PropertiesMap): Object;
		exists(path: string, root?: Object): boolean;
		extend<T extends Object>(ctor: T, ...props: PropertiesMap[]): T;
		getObject(path: string, create?: boolean, context?: Object): Object;

		hitch<F extends Function>(scope: Object, method: F): F;
		hitch(scope: Object, method: string): Function;

		mixin<T extends Object>(dest: T, ...sources: PropertiesMap[]): T;

		partial<F extends Function>(method: F, ...v_args: any[]): F;
		partial(method: string, ...v_args: any[]): Function;

		replace(tmpl: string, map: Dictionary<any>, pattern?: string): string;
		replace(tmpl: string, map: string[], pattern?: string): string;
		replace(tmpl: string, map: (matched: string, key: string, offset: number, template: string) => string, pattern?: string): string;

		setObject(path: string, value: any, thisObject?: Object): Object;
		trim(str: string): string;

		// NOTE: The following functions are deprecated
		isString(v: any): boolean;
		isArray(v: any): boolean;
		isFunction(v: any): boolean;
		isArrayLike(v: any): boolean;
		isObject(v: any): boolean;
	}
}
declare module "dojo/_base/lang"
{
	var lang: Dojo.Lang;
	export = lang;
}

// dojo/AdapterRegistry

declare module "dojo/AdapterRegistry"
{
	class DojoAdapterRegistry
	{
		constructor(returnWrappers?: boolean);

		pairs: any[];
		returnWrappers: boolean;

		match(...args: Object[]): void;
		register(name: string, check: Dojo.FunctionReturning<boolean>, wrap: Dojo.Action, directReturn?: boolean, override?: boolean): void;
		unregister(name: string): boolean;
	}

	export = DojoAdapterRegistry;
}

// dojo/aspect 

declare module Dojo
{
	interface Aspect
	{
		after(target: Object, methodName: string, advice: (x: any) => any): RemovableHandle;
		after(target: Object, methodName: string, advice: Function, receiveArguments: boolean): RemovableHandle;

		around(target: Object, methodName: string, advice: (fn: Function) => Function): RemovableHandle;
		before(target: Object, methodName: string, advice: FunctionReturning<any[]>): RemovableHandle;
	}
}
declare module "dojo/aspect"
{
	var aspect: Dojo.Aspect;
	export = aspect;
}

// dojo/back

declare module Dojo
{
	interface HistoryState
	{
		back?: (direction: string) => void;
		forward?: (direction: string) => void;
		changeUrl?: any;
	}

	interface Back
	{
		init(): void;
		addToHistory(args: HistoryState): void;
		getHash(): any;
	}
}
declare module "dojo/back"
{
	var back: Dojo.Back;
	export = back;
}

// dojo.cache

declare module Dojo
{
	interface Cache
	{
		<T>(url: string): T;
		<T>(url: string, value: T): void;
		<T>(module: string, url: string): T;
		<T>(module: string, url: string, value: T): void;
	}
}
declare module "dojo/cache"
{
	var cache: Dojo.Cache;
	export = cache;
}

// dojo/cldr/monetary

declare module Dojo
{
	module Cldr
	{
		interface Monetary
		{
			getData(code: string): string;
		}
	}
}
declare module "dojo/cldr/monetary"
{
	var monetary: Dojo.Cldr.Monetary;
	export = monetary;
}

// dojo/cldr/supplemental

declare module Dojo
{
	module Cldr
	{
		interface Supplemental
		{
			getFirstDayOfWeek(locale?: string): number;
			getWeekend(locale?: string): { start: number; end: number; };
		}
	}
}
declare module "dojo/cldr/supplemental"
{
	var supplemental: Dojo.Cldr.Supplemental;
	export = supplemental;
}

// dojo/cookie

declare module Dojo
{
	interface Cookie
	{
		(name: string): string;
		(name: string, value: string, props?: {
		expires?: any;
		path?: string;
		domain?: string;
		secure?: boolean;
	}): void;

		isSupported(): boolean;
	}
}
declare module "dojo/cookie"
{
	var cookie: Dojo.Cookie;
	export = cookie;
}

// dojo/currency

declare module Dojo
{
	interface _CurrencyFormatOptions
	{
		currency?: string;
		fractional?: boolean;
		locale?: string;
		pattern?: string;
		places?: number;
		round?: number;
		symbol?: string;
		type?: string;
		strict?: boolean;
	}
	interface Currency
	{
		format(value: number, options?: _CurrencyFormatOptions): string;
		parse(expression: string, options?: _CurrencyFormatOptions): number;
		regexp(options?: _CurrencyFormatOptions): RegExp;
	}
}
declare module "dojo/currency"
{
	var currency: Dojo.Currency;
	export = currency;
}

// dojo/date

interface _HTMLDate extends Date { }

declare module Dojo
{
	module Date
	{
		interface Base
		{
			add(date: _HTMLDate, interval: string, amount: number): _HTMLDate;
			compare(date1: _HTMLDate, date2?: _HTMLDate, portion?: string): number;
			difference(date1: _HTMLDate, date2?: _HTMLDate, interval?: string): number;
			getDaysInMonth(dateObject: _HTMLDate): number;
			getTimezoneName(dateObject: _HTMLDate): string;
			isLeapYear(dateObject: _HTMLDate): boolean;
		}
	}
}
declare module "dojo/date"
{
	var date: Dojo.Date.Base;
	export = date;
}

// dojo/date/stamp

declare module Dojo
{
	module Date
	{
		interface Stamp
		{
			fromISOString(formattedString: string, defaultTime?: number): _HTMLDate;
			toISOString(dateObject: _HTMLDate, options?: { selector?: string; zulu?: boolean; milliseconds?: number; }): string;
		}
	}
}
declare module "dojo/date/stamp"
{
	var stamp: Dojo.Date.Stamp;
	export = stamp;
}

// dojo/date/locale

declare module Dojo
{
	module Date
	{
		interface FormatOptions
		{
			selector?: string;
			formatLength?: string;
			datePattern?: string;
			timePattern?: string;
			am?: string;
			pm?: string;
			locale?: string;
			fullYear?: boolean;
			strict?: boolean;
		}

		interface Locale
		{
			addCustomFormats(packageName: string, bundleName: string): void;
			format(dateObject: _HTMLDate, options?: FormatOptions): string;
			getNames(item: string, type: string, context?: string, locale?: string): string[];
			isWeekend(dateObject?: _HTMLDate, locale?: string): boolean;
			parse(value: string, options?: FormatOptions): _HTMLDate;
			regexp(options?: FormatOptions): RegExp;
		}
	}
}
declare module "dojo/date/locale"
{
	var locale: Dojo.Date.Locale;
	export = locale;
}

// dojo/Deferred

declare module dojo
{
	class Deferred<T>
	{
		constructor(canceler?: (reason: any) => void );

		promise: Promise<T>;

		isCanceled(): boolean;
		isFulfilled(): boolean;
		isRejected(): boolean;
		isResolved(): boolean;

		progress(update: any, strict?: boolean): void;
		reject(reason: any, strict?: boolean): void;
		resolve(value: T, strict?: boolean): void;
		cancel(reason: any, strict?: boolean): any;

		then<V>(callback?: (value: T) => Deferred<V>, errback?: (error: any) => void , progback?: (progress: any) => void ): Promise<V>;
		then<V>(callback?: (value: T) => Promise<V>, errback?: (error: any) => void , progback?: (progress: any) => void ): Promise<V>;
		then<V>(callback?: (value: T) => V, errback?: (error: any) => void , progback?: (progress: any) => void ): Promise<V>;
	}
}
declare module "dojo/Deferred"
{
	class Deferred<T> extends dojo.Deferred<T> { }
	export = Deferred;
}

// dojo/dom

declare module Dojo
{
	interface Dom
	{
		byId(node: HTMLElement): HTMLElement;
		byId(id: string): HTMLElement;

		isDescendant(id: string, ancestor: string): boolean;
		isDescendant(node: HTMLElement, ancestor: string): boolean;
		isDescendant(id: string, ancestor: HTMLElement): boolean;
		isDescendant(node: HTMLElement, ancestor: HTMLElement): boolean;

		setSelectable(id: string, selectable: boolean);
		setSelectable(node: HTMLElement, selectable: boolean);
	}
}
declare module "dojo/dom"
{
	var dom: Dojo.Dom;
	export = dom;
}

// dojo/dom-attr

declare module Dojo
{
	interface DomAttr
	{
		has(id: string, attr: string): boolean;
		has(node: HTMLElement, attr: string): boolean;

		get(id: string, attr: string): string;
		get(node: HTMLElement, attr: string): string;

		set(id: string, attr: string, value: string): void;
		set(node: HTMLElement, attr: string, value: string): void;
		set(id: string, values: AttributesMap): void;
		set(node: HTMLElement, values: AttributesMap): void;

		remove(id: string, attr: string): string;
		remove(node: HTMLElement, attr: string): string;

		getNodeProp(id: string, attr: string): any;
		getNodeProp(node: HTMLElement, attr: string): any;
	}
}
declare module "dojo/dom-attr"
{
	var domAttr: Dojo.DomAttr;
	export = domAttr;
}

// dojo/dom-class

declare module Dojo
{
	interface DomClass
	{
		contains(node: string, className: string): boolean;
		contains(node: HTMLElement, className: string): boolean;

		add(node: string, classNames: string): void;
		add(node: string, classNames: string[]): void;
		add(node: HTMLElement, classNames: string): void;
		add(node: HTMLElement, classNames: string[]): void;

		remove(node: string): void;
		remove(node: string, classNames: string): void;
		remove(node: string, classNames: string[]): void;
		remove(node: HTMLElement): void;
		remove(node: HTMLElement, classNames: string): void;
		remove(node: HTMLElement, classNames: string[]): void;

		replace(node: string, addClassNames: string, removeClassNames: string): void;
		replace(node: string, addClassNames: string[], removeClassNames: string): void;
		replace(node: HTMLElement, addClassNames: string, removeClassNames: string): void;
		replace(node: HTMLElement, addClassNames: string[], removeClassNames: string): void;
		replace(node: string, addClassNames: string, removeClassNames: string[]): void;
		replace(node: string, addClassNames: string[], removeClassNames: string[]): void;
		replace(node: HTMLElement, addClassNames: string, removeClassNames: string[]): void;
		replace(node: HTMLElement, addClassNames: string[], removeClassNames: string[]): void;

		toggle(node: string, className: string, addRemove?: boolean): void;
		toggle(node: HTMLElement, className: string, addRemove?: boolean): void;
	}
}
declare module "dojo/dom-class"
{
	var domClass: Dojo.DomClass;
	export = domClass;
}

// dojo/dom-construct

declare module Dojo
{
	interface DomConstruct
	{
		toDom(frag: string, doc?: HTMLDocument): HTMLElement;

		place(id: string, refNodeId: string, pos?: string): HTMLElement;
		place(node: HTMLElement, refNodeId: string, pos?: string): HTMLElement;
		place(id: string, refNode: HTMLElement, pos?: string): HTMLElement;
		place(node: HTMLElement, refNode: HTMLElement, pos?: string): HTMLElement;
		place(id: string, refNodeId: string, pos?: number): HTMLElement;
		place(node: HTMLElement, refNodeId: string, pos?: number): HTMLElement;
		place(id: string, refNode: HTMLElement, pos?: number): HTMLElement;
		place(node: HTMLElement, refNode: HTMLElement, pos?: number): HTMLElement;

		create(id: string, attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement;
		create(tag: HTMLElement, attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement;
		create(id: string, attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement;
		create(tag: HTMLElement, attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement;

		empty(id: string): void;
		empty(node: HTMLElement): void;

		destroy(id: string): void;
		destroy(node: HTMLElement): void;
	}
}
declare module "dojo/dom-construct"
{
	var domConstruct: Dojo.DomConstruct;
	export = domConstruct;
}

// dojo/dom-form

declare module Dojo
{
	interface DomForm
	{
		fieldToObject(inputNode: HTMLElement): any;
		fieldToObject(inputNode: string): any;

		toJson(formNode: HTMLElement, prettyPrint?: boolean): string;
		toJson(formNode: string, prettyPrint?: boolean): string;

		toObject(formNode: HTMLElement): Object;
		toObject(formNode: string): Object;

		toQuery(formNode: HTMLElement): string;
		toQuery(formNode: string): string;
	}
}
declare module "dojo/dom-form"
{
	var domForm: Dojo.DomForm;
	export = domForm;
}

// dojo/dom-geometry

declare module Dojo
{
	interface DomGeometry
	{
		boxModel: string;

		docScroll(doc?: HTMLDocument): { node: HTMLElement; x: number; y: number; };
		fixIeBiDiScrollLeft(scrollLeft: number, doc?: HTMLDocument): number;
		getBorderExtents(node: HTMLElement, computedStyle?: StylesMap): Box;
		getContentBox(node: HTMLElement, computedStyle?: StylesMap): Position;
		getIeDocumentElementOffset(doc?: HTMLDocument): Point;
		getMarginBox(node: HTMLElement, computedStyle?: StylesMap): Position;
		getMarginExtents(node: HTMLElement, computedStyle?: StylesMap): Position;
		getMarginSize(node: HTMLElement, computedStyle?: StylesMap): Size;
		getPadBorderExtents(node: HTMLElement, computedStyle?: StylesMap): Box;
		getPadExtents(node: HTMLElement, computedStyle?: StylesMap): Box;
		isBodyLtr(doc?: HTMLDocument): boolean;
		normalizeEvent(event: { pageX?: number; pageY?: number; offsetX?: number; offsetY?: number; layerX?: number; layerY?: number; }): void;

		position(node: HTMLElement, includeScroll?: boolean): Position;
		position(node: string, includeScroll?: boolean): Position;

		setContentSize(node: HTMLElement, box: Size, computedStyle?: StylesMap): void;
		setMarginBox(node: HTMLElement, box: Size, computedStyle?: StylesMap): void;
	}
}
declare module "dojo/dom-geometry"
{
	var domGeometry: Dojo.DomGeometry;
	export = domGeometry;
}

// dojo/dom-prop

declare module Dojo
{
	interface DomProp
	{
		get(id: string, attr: string): string;
		get(node: HTMLElement, attr: string): string;

		set(id: string, attr: string, value: string): void;
		set(node: HTMLElement, attr: string, value: string): void;
		set(id: string, values: AttributesMap): void;
		set(node: HTMLElement, values: AttributesMap): void;
	}
}
declare module "dojo/dom-prop"
{
	var domProp: Dojo.DomProp;
	export = domProp;
}

// dojo/dom-style

declare module Dojo
{
	interface DomStyle
	{
		getComputedStyle(node: HTMLElement): StylesMap;

		get(id: string, style?: string): StylesMap;
		get(node: HTMLElement, style?: string): StylesMap;

		set(id: string, style: string, value: string): void;
		set(node: HTMLElement, style: string, value: string): void;
		set(id: string, values: StylesMap): void;
		set(node: HTMLElement, values: StylesMap): void;
	}
}
declare module "dojo/dom-style"
{
	var domStyle: Dojo.DomStyle;
	export = domStyle;
}

// dojo/Evented

declare module "dojo/Evented"
{
	var Evented: dojo.Evented;
	export = Evented;
}

// dojo/fx

declare module Dojo
{
	module Fx
	{
		interface SlideCreateOptions extends CreateOptions
		{
			top: string;
			left: string;
		}
		interface AutoSlideCreateOptions extends SlideCreateOptions
		{
			auto: any;
		}

		interface Module
		{
			chain(animations: dojo.Animation[]): dojo.Animation;
			combine(animations: dojo.Animation[]): dojo.Animation;
			slideTo(args: SlideCreateOptions): dojo.Animation;
			Toggler: new (args: TogglerCreateOptions) => Toggler;
			wipeIn(args: CreateOptions): dojo.Animation;
			wipeOut(args: CreateOptions): dojo.Animation;
		}
	}
}

declare module "dojo/fx" 
{
	var fx: Dojo.Fx.Module;
	export = fx;
}

// dojo/fx/easing

declare module Dojo
{
	module Fx
	{
		interface Easing
		{
			backIn(n: number): number;
			backInOut(n: number): number;
			backOut(n: number): number;
			bounceIn(n: number): number;
			bounceInOut(n: number): number;
			bounceOut(n: number): number;
			circIn(n: number): number;
			circInOut(n: number): number;
			circOut(n: number): number;
			cubicIn(n: number): number;
			cubicInOut(n: number): number;
			cubicOut(n: number): number;
			elasticIn(n: number): number;
			elasticInOut(n: number): number;
			elasticOut(n: number): number;
			expoIn(n: number): number;
			expoInOut(n: number): number;
			expoOut(n: number): number;
			linearIn(n: number): number;
			linearInOut(n: number): number;
			linearOut(n: number): number;
			quadIn(n: number): number;
			quadInOut(n: number): number;
			quadOut(n: number): number;
			quartIn(n: number): number;
			quartInOut(n: number): number;
			quartOut(n: number): number;
			quintIn(n: number): number;
			quintInOut(n: number): number;
			quintOut(n: number): number;
			sineIn(n: number): number;
			sineInOut(n: number): number;
			sineOut(n: number): number;
		}
	}
}
declare module "dojo/fx/easing"
{
	var easing: Dojo.Fx.Easing;
	export = easing;
}

// dojo/fx/Toggler

declare module Dojo
{
	module Fx
	{
		interface TogglerCreateOptions
		{
			node: any;
			showDuration?: number;
			showFunc?: (args: BaseCreateOptions) => dojo.Animation;
			hideDuration?: number;
			hideFuc?: (args: BaseCreateOptions) => dojo.Animation;
		}

		class Toggler
		{
			constructor(args: TogglerCreateOptions);

			hideDuration: number;
			node: HTMLElement;
			showDuration: number;

			hide(delay?: number): dojo.Animation;
			hideFunc(args?: { node: any; duration?: number; easing: EasingFunction; }): dojo.Animation;
			show(delay?: number): dojo.Animation;
			showFunc(args?: { node: any; duration?: number; easing: EasingFunction; }): dojo.Animation;
		}
	}
}
declare module "dojo/fx/Toggler"
{
	class Toggler extends Dojo.Fx.Toggler { }
	export = Toggler;
}

// dojo/has

declare module Dojo
{
	interface Has
	{
		(feature: string): boolean;
		(feature: number): boolean;

		add(feature: string, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
		add(feature: number, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
		clearElement(element: Object): void;
		load<T>(id: string, parentRequire: Function, loaded: (m: T) => void ): void;
		normalize(id: number, toAbsMid: (id: number) => number): void;
	}
}
declare module "dojo/has"
{
	var has: Dojo.Has;
	export = has;
}

// dojo/hash

declare module Dojo
{
	interface Hash
	{
		(hash?: string, replace?: boolean): string;
	}
}
declare module "dojo/hash"
{
	var hash: Dojo.Hash;
	export = hash;
}

// dojo/html

declare module Dojo
{
	interface _HtmlContentSetterOptions
	{
		cleanContent?: boolean;
		extractContent?: boolean;
		parseContent?: boolean;
		parserScope?: string;
		startup?: boolean;

		onBegin(): void;
		onContentError(err: any): string;
		onEnd(): void;
	}

	interface Html
	{
		set(node: HTMLElement, content: string, params?: _HtmlContentSetterOptions): void;
		set(node: HTMLElement, content: HTMLElement, params?: _HtmlContentSetterOptions): void;
		set(node: HTMLElement, content: NodeList, params?: _HtmlContentSetterOptions): void;
		set(node: HTMLElement, content: dojo.NodeList, params?: _HtmlContentSetterOptions): void;
		set(node: HTMLElement, content: HTMLElement[], params?: _HtmlContentSetterOptions): void;
	}
}
declare module "dojo/html"
{
	var html: Dojo.Html;
	export = html;
}

// dojo/io-query

declare module Dojo
{
	interface IOQuery
	{
		objectToQuery(map: Dojo.Dictionary<any>): string;
		queryToObject(str: string): Dojo.Dictionary<any>;
	}
}
declare module "dojo/io-query"
{
	var ioQuery: Dojo.IOQuery;
	export = ioQuery;
}

// dojo/keys

declare module Dojo
{
	interface Keys
	{
		BACKSPACE: number;
		TAB: number;
		CLEAR: number;
		ENTER: number;
		SHIFT: number;
		CTRL: number;
		ALT: number;
		META: number;
		PAUSE: number;
		CAPS_LOCK: number;
		ESCAPE: number;
		SPACE: number;
		PAGE_UP: number;
		PAGE_DOWN: number;
		END: number;
		HOME: number;
		LEFT_ARROW: number;
		UP_ARROW: number;
		RIGHT_ARROW: number;
		DOWN_ARROW: number;
		INSERT: number;
		DELETE: number;
		HELP: number;
		LEFT_WINDOW: number;
		RIGHT_WINDOW: number;
		SELECT: number;
		NUMPAD_0: number;
		NUMPAD_1: number;
		NUMPAD_2: number;
		NUMPAD_3: number;
		NUMPAD_4: number;
		NUMPAD_5: number;
		NUMPAD_6: number;
		NUMPAD_7: number;
		NUMPAD_8: number;
		NUMPAD_9: number;
		NUMPAD_MULTIPLY: number;
		NUMPAD_PLUS: number;
		NUMPAD_ENTER: number;
		NUMPAD_MINUS: number;
		NUMPAD_PERIOD: number;
		NUMPAD_DIVIDE: number;
		F1: number;
		F2: number;
		F3: number;
		F4: number;
		F5: number;
		F6: number;
		F7: number;
		F8: number;
		F9: number;
		F10: number;
		F11: number;
		F12: number;
		F13: number;
		F14: number;
		F15: number;
		NUM_LOCK: number;
		SCROLL_LOCK: number;
		copyKey: number;
	}
}
declare module "dojo/keys"
{
	var keys: Dojo.Keys;
	export = keys;
}

// dojo/json

declare module Dojo
{
	interface Json
	{
		parse(str: string, secured?: boolean): any;

		stringify(obj: any, replacer?: any[], space?: boolean): string;
		stringify(obj: any, replacer?: (key: string, value: string) => any, space?: boolean): string;
	}
}
declare module "dojo/json"
{
	var json: Dojo.Json;
	export = json;
}

// dojo/mouse

declare module Dojo
{
	interface Mouse
	{
		enter: ExtensionEvent;
		leave: ExtensionEvent;

		isLeft(event: MouseEvent): boolean;
		isMiddle(event: MouseEvent): boolean;
		isRight(event: MouseEvent): boolean;
	}
}
declare module "dojo/mouse"
{
	var mouse: Dojo.Mouse;
	export = mouse;
}

// dojo/NodeList

interface _HTMLNodeList extends NodeList { }

declare module Dojo
{
	module Fx
	{
		interface AutoCreateOptions extends CreateOptions
		{
			auto: any;
		}
		interface AutoBaseCreateOptions extends BaseCreateOptions
		{
			auto: any;
		}
	}
}
declare module dojo
{
	class NodeList
	{
		constructor(node: HTMLElement);
		constructor(nodes: HTMLElement[]);
		constructor(nodes: _HTMLNodeList);
		constructor(nodes: dojo.NodeList);

		addClass(className: string): dojo.NodeList;
		addClass(classNames: string[]): dojo.NodeList;

		addClassFx(className: string, options?: Dojo.Fx.CreateOptions): Animation;
		addClassFx(classNames: string[], options?: Dojo.Fx.CreateOptions): Animation;

		addContent(content: string, position?: string): dojo.NodeList;
		addContent(content: { template: string; parse?: boolean; templateFunc?: (template: string, content: Object) => Object; }, position?: string): dojo.NodeList;
		addContent(content: HTMLElement, position?: string): dojo.NodeList;
		addContent(content: HTMLElement[], position?: string): dojo.NodeList;
		addContent(content: dojo.NodeList, position?: string): dojo.NodeList;
		addContent(content: _HTMLNodeList, position?: string): dojo.NodeList;
		addContent(content: string, position?: number): dojo.NodeList;
		addContent(content: { template: string; parse?: boolean; templateFunc?: (template: string, content: Object) => Object; }, position?: number): dojo.NodeList;
		addContent(content: HTMLElement, position?: number): dojo.NodeList;
		addContent(content: HTMLElement[], position?: number): dojo.NodeList;
		addContent(content: dojo.NodeList, position?: number): dojo.NodeList;
		addContent(content: _HTMLNodeList, position?: number): dojo.NodeList;

		adopt(query: string, position?: string): dojo.NodeList;
		adopt(node: HTMLElement, position?: string): dojo.NodeList;
		adopt(list: HTMLElement[], position?: string): dojo.NodeList;
		adopt(list: _HTMLNodeList, position?: string): dojo.NodeList;
		adopt(list: dojo.NodeList, position?: string): dojo.NodeList;
		adopt(query: string, position?: number): dojo.NodeList;
		adopt(node: HTMLElement, position?: number): dojo.NodeList;
		adopt(list: HTMLElement[], position?: number): dojo.NodeList;
		adopt(list: _HTMLNodeList, position?: number): dojo.NodeList;
		adopt(list: dojo.NodeList, position?: number): dojo.NodeList;

		after(content: string): dojo.NodeList;
		after(content: Object): dojo.NodeList;
		after(content: HTMLElement): dojo.NodeList;
		after(content: HTMLElement[]): dojo.NodeList;
		after(content: dojo.NodeList): dojo.NodeList;
		after(content: _HTMLNodeList): dojo.NodeList;

		andSelf(): dojo.NodeList;
		anim(properties: Dojo.PropertiesMap, duration?: number, easing?: Dojo.Fx.EasingFunction, onEnd?: Dojo.SimpleAction, delay?: number): Animation;

		animateProperty(args: Dojo.Fx.AutoCreateOptions): dojo.NodeList;
		animateProperty(args: Dojo.Fx.CreateOptions): Animation;

		append(content: string): dojo.NodeList;
		append(content: Object): dojo.NodeList;
		append(content: HTMLElement): dojo.NodeList;
		append(content: HTMLElement[]): dojo.NodeList;
		append(content: dojo.NodeList): dojo.NodeList;
		append(content: _HTMLNodeList): dojo.NodeList;

		appendTo(query: string): dojo.NodeList;
		at(...index: number[]): dojo.NodeList;

		attr(property: string): string[];
		attr(property: string, value: string): dojo.NodeList;

		before(content: string): dojo.NodeList;
		before(content: Object): dojo.NodeList;
		before(content: HTMLElement): dojo.NodeList;
		before(content: HTMLElement[]): dojo.NodeList;
		before(content: dojo.NodeList): dojo.NodeList;
		before(content: _HTMLNodeList): dojo.NodeList;

		children(query?: string): dojo.NodeList;
		clone(): dojo.NodeList;

		closest(query: string): HTMLElement;
		closest(query: string, rootId: string): HTMLElement;
		closest(query: string, root: Object): HTMLElement;

		concat(...items: HTMLElement[]): dojo.NodeList;

		connect(methodName: string, funcName: string): dojo.NodeList;
		connect(methodName: string, func: Function): dojo.NodeList;
		connect(methodName: string, obj: Object, funcName: string): dojo.NodeList;

		data(key: Dojo.PropertiesMap): dojo.NodeList;
		data(key: string): any;
		data(key: string, value: any): dojo.NodeList;

		delegate(selector: string, eventName: string, listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "abort", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "afterprint", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "beforeprint", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "blur", listener: (ev: FocusEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "canplay", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "canplaythrough", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "change", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "click", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "contextmenu", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dblclick", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "drag", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragend", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragenter", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragleave", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragover", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragstart", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "drop", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "durationchange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "emptied", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "ended", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "focus", listener: (ev: FocusEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "hashchange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "input", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "keydown", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "keypress", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "keyup", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "load", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "loadeddata", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "loadedmetadata", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "loadstart", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "message", listener: (ev: MessageEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mousedown", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mousemove", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mouseout", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mouseover", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mouseup", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mousewheel", listener: (ev: MouseWheelEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "offline", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "online", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "pause", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "play", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "playing", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "progress", listener: (ev: any) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "ratechange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "readystatechange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "reset", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "resize", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "scroll", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "seeked", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "seeking", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "select", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "stalled", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "storage", listener: (ev: StorageEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "submit", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "suspend", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "timeupdate", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "unload", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "volumechange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "waiting", listener: (ev: Event) => boolean): dojo.NodeList;

		dtl(template: string, thisObject?: Object): dojo.NodeList;
		empty(): dojo.NodeList;
		end(): dojo.NodeList;
		even(): dojo.NodeList;
		every(callback: (node: HTMLElement, index: number, list: dojo.NodeList) => boolean, thisObject?: Object): boolean;

		fadeIn(args?: Dojo.Fx.AutoBaseCreateOptions): dojo.NodeList;
		fadeIn(args?: Dojo.Fx.BaseCreateOptions): Animation;

		fadeOut(args?: Dojo.Fx.AutoBaseCreateOptions): dojo.NodeList;
		fadeOut(args?: Dojo.Fx.BaseCreateOptions): Animation;

		filter(filter: string): dojo.NodeList;
		filter(filter: (item: HTMLElement, index: number, list: dojo.NodeList) => boolean): dojo.NodeList;

		first(): dojo.NodeList;
		forEach(callback: (item: HTMLElement, index: number, list: dojo.NodeList) => void , thisObject?: Object): dojo.NodeList;

		html(): string;
		html(content: string): dojo.NodeList;
		html(content: HTMLElement): dojo.NodeList;
		html(content: HTMLElement[]): dojo.NodeList;
		html(content: _HTMLNodeList): dojo.NodeList;
		html(content: dojo.NodeList): dojo.NodeList;

		indexOf(value: HTMLElement, fromIndex?: number): number;

		innerHTML(): string;
		innerHTML(content: string): dojo.NodeList;
		innerHTML(content: HTMLElement): dojo.NodeList;
		innerHTML(content: HTMLElement[]): dojo.NodeList;
		innerHTML(content: _HTMLNodeList): dojo.NodeList;
		innerHTML(content: dojo.NodeList): dojo.NodeList;

		insertAfter(query: string): dojo.NodeList;
		insertBefore(query: string): dojo.NodeList;
		instantiate(declaredClass: string, properties?: Dojo.PropertiesMap): dojo.NodeList;
		last(): dojo.NodeList;
		lastIndexOf(value: HTMLElement, fromIndex?: number): number;
		map(func: (item: HTMLElement, index: number, list: dojo.NodeList) => HTMLElement, thisObject?: Object): dojo.NodeList;
		marginBox(): Position;
		next(query?: string): dojo.NodeList;
		nextAll(query?: string): dojo.NodeList;
		odd(): dojo.NodeList;

		on(name: "abort", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		on(name: "afterprint", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "beforeprint", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean): dojo.NodeList;
		on(name: "blur", listener: (ev: FocusEvent) => boolean): dojo.NodeList;
		on(name: "canplay", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "canplaythrough", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "change", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "click", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "contextmenu", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "dblclick", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "drag", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragend", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragenter", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragleave", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragover", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragstart", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "drop", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "durationchange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "emptied", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "ended", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "focus", listener: (ev: FocusEvent) => boolean): dojo.NodeList;
		on(name: "hashchange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "input", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "keydown", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		on(name: "keypress", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		on(name: "keyup", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		on(name: "load", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "loadeddata", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "loadedmetadata", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "loadstart", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "message", listener: (ev: MessageEvent) => boolean): dojo.NodeList;
		on(name: "mousedown", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mousemove", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mouseout", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mouseover", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mouseup", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mousewheel", listener: (ev: MouseWheelEvent) => boolean): dojo.NodeList;
		on(name: "offline", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "online", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "pause", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "play", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "playing", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "progress", listener: (ev: any) => boolean): dojo.NodeList;
		on(name: "ratechange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "readystatechange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "reset", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "resize", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		on(name: "scroll", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		on(name: "seeked", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "seeking", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "select", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		on(name: "stalled", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "storage", listener: (ev: StorageEvent) => boolean): dojo.NodeList;
		on(name: "submit", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "suspend", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "timeupdate", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "unload", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "volumechange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "waiting", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: string, listener: (ev: Event) => boolean): dojo.NodeList;
		on(type: Dojo.ExtensionEvent, listener: EventListener): dojo.NodeList;

		orphan(filter?: string): dojo.NodeList;
		parent(query?: string): dojo.NodeList;
		parents(query?: string): dojo.NodeList;

		place(query: string, position?: string): dojo.NodeList;
		place(node: HTMLElement, position?: string): dojo.NodeList;
		place(query: string, position?: number): dojo.NodeList;
		place(node: HTMLElement, position?: number): dojo.NodeList;

		position(): Dojo.Rectangle;

		prepend(content: string): dojo.NodeList;
		prepend(content: Object): dojo.NodeList;
		prepend(content: HTMLElement): dojo.NodeList;
		prepend(content: HTMLElement[]): dojo.NodeList;
		prepend(content: dojo.NodeList): dojo.NodeList;
		prepend(content: _HTMLNodeList): dojo.NodeList;

		prependTo(query: string): dojo.NodeList;
		prev(query?: string): dojo.NodeList;
		prevAll(query?: string): dojo.NodeList;
		query(query: string): dojo.NodeList;
		remove(filter?: string): dojo.NodeList;
		removeAttr(name: string): dojo.NodeList;

		removeClass(className?: string): dojo.NodeList;
		removeClass(classNames?: string[]): dojo.NodeList;

		removeClassFx(className: string, args?: Dojo.Fx.CreateOptions): Animation;
		removeClassFx(classNames: string[], args?: Dojo.Fx.CreateOptions): Animation;

		removeData(key?: string): dojo.NodeList;
		replaceAll(query: string): dojo.NodeList;

		replaceClass(addClass: string, removeClass?: string): dojo.NodeList;
		replaceClass(addClass: string, removeClasses?: string[]): dojo.NodeList;
		replaceClass(addClasses: string[], removeClass?: string): dojo.NodeList;
		replaceClass(addClasses: string[], removeClasses?: string[]): dojo.NodeList;

		replaceWith(content: string): dojo.NodeList;
		replaceWith(content: Object): dojo.NodeList;
		replaceWith(content: HTMLElement): dojo.NodeList;
		replaceWith(content: HTMLElement[]): dojo.NodeList;
		replaceWith(content: dojo.NodeList): dojo.NodeList;
		replaceWith(content: _HTMLNodeList): dojo.NodeList;

		siblings(query?: string): dojo.NodeList;
		slice(begin: number, end?: number): dojo.NodeList;

		slideTo(args: Dojo.Fx.SlideCreateOptions): Animation;
		slideTo(args: Dojo.Fx.AutoSlideCreateOptions): dojo.NodeList;

		some(callback: (node: HTMLElement, index: number, list: dojo.NodeList) => boolean, thisObject?: Object): boolean;
		splice(index: number, howmany?: number, ...items: HTMLElement[]): dojo.NodeList;

		style(property: string): string[];
		style(property: string, value: string): dojo.NodeList;

		text(): string;
		text(value: string): dojo.NodeList;

		toggleClass(className: string, condition?: boolean): dojo.NodeList;
		toggleClassFx(className: string, condition?: boolean, options?: Dojo.Fx.CreateOptions): Animation;

		val(): string;
		val(value: string): dojo.NodeList;
		val(value: string[]): dojo.NodeList;

		wipeIn(args: Dojo.Fx.AutoCreateOptions): dojo.NodeList;
		wipeIn(args: Dojo.Fx.CreateOptions): Animation;
		
		wipeOut(args: Dojo.Fx.AutoCreateOptions): dojo.NodeList;
		wipeOut(args: Dojo.Fx.CreateOptions): Animation;

		wrap(html: string): dojo.NodeList;
		wrap(node: HTMLElement): dojo.NodeList;

		wrapAll(html: string): dojo.NodeList;
		wrapAll(node: HTMLElement): dojo.NodeList;

		wrapInner(html: string): dojo.NodeList;
		wrapInner(node: HTMLElement): dojo.NodeList;
	}
}
declare module "dojo/NodeList"
{
	var NodeList: dojo.NodeList;
	export = NodeList;
}

// dojo/NodeList-???

declare module "dojo/NodeList-data" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-dom" { 
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-fx" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-html" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-manipulate" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-traverse" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}

// dojo/number

declare module Dojo
{
	interface Number
	{
		format(value: string, options?: {
			pattern?: string;
			type?: string;
			locale?: string;
			round?: number;
			fractional?: boolean;
			places?: number;
		}): string;
		parse(expression: string, options?: {
			pattern?: string;
			type?: string;
			locale?: string;
			strict?: boolean;
			fractional?: boolean;
		}): number;
		regexp(options?: {
			pattern?: string;
			type?: string;
			locale?: string;
			strict?: boolean;
			places?: number;
		}): RegExp;
		round(value: number, places?: number, increment?: number): number;
	}
}
declare module "dojo/number"
{
	var num: Dojo.Number;
	export = num;
}

// dojo/on

declare module Dojo
{
	interface On
	{
		(target: HTMLElement, type: "abort", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "afterprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "beforeprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "blur", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "canplay", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "canplaythrough", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "change", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "click", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "contextmenu", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dblclick", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "drag", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragend", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragenter", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragleave", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragover", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragstart", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "drop", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "durationchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "emptied", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "ended", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "focus", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "hashchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "input", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "keydown", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "keypress", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "keyup", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "load", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "loadeddata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "loadedmetadata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "loadstart", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "message", listener: (ev: MessageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mousedown", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mousemove", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mouseout", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mouseover", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mouseup", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "offline", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "online", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "pause", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "play", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "playing", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "progress", listener: (ev: any) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "ratechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "readystatechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "reset", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "resize", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "scroll", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "seeked", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "seeking", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "select", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "stalled", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "storage", listener: (ev: StorageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "submit", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "suspend", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "timeupdate", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "unload", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "volumechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "waiting", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: string, listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: Object, type: string, listener: EventListener, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.RemovableHandle;
		(target: Object, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.RemovableHandle;

		emit(target: Object, type: string, event: { bubbles?: boolean; cancelable?: boolean; }): void;
		emit(target: Object, type: Dojo.ExtensionEvent, event: { bubbles?: boolean; cancelable?: boolean; }): void;

		selector(cssSelector: string, event: string, children?: boolean): Dojo.ExtensionEvent;
		selector(cssSelector: string, event: Dojo.ExtensionEvent, children?: boolean): Dojo.ExtensionEvent;

		pausable(target: HTMLElement, type: "abort", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "afterprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "beforeprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "blur", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "canplay", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "canplaythrough", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "change", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "click", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "contextmenu", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dblclick", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "drag", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragend", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragenter", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragleave", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragover", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragstart", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "drop", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "durationchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "emptied", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "ended", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "focus", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "hashchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "input", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "keydown", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "keypress", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "keyup", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "load", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "loadeddata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "loadedmetadata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "loadstart", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "message", listener: (ev: MessageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mousedown", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mousemove", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mouseout", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mouseover", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mouseup", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "offline", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "online", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "pause", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "play", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "playing", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "progress", listener: (ev: any) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "ratechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "readystatechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "reset", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "resize", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "scroll", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "seeked", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "seeking", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "select", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "stalled", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "storage", listener: (ev: StorageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "submit", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "suspend", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "timeupdate", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "unload", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "volumechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "waiting", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: string, listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: Object, type: string, listener: EventListener, dontFix?: boolean): Dojo.PausableHandle;
		pausable(target: HTMLElement, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.PausableHandle;
		pausable(target: Object, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.PausableHandle;

		once(target: HTMLElement, type: "afterprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "beforeprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "blur", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "canplay", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "canplaythrough", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "change", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "click", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "contextmenu", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dblclick", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "drag", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragend", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragenter", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragleave", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragover", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragstart", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "drop", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "durationchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "emptied", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "ended", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "focus", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "hashchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "input", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "keydown", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "keypress", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "keyup", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "load", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "loadeddata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "loadedmetadata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "loadstart", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "message", listener: (ev: MessageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mousedown", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mousemove", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mouseout", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mouseover", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mouseup", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "offline", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "online", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "pause", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "play", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "playing", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "progress", listener: (ev: any) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "ratechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "readystatechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "reset", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "resize", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "scroll", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "seeked", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "seeking", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "select", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "stalled", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "storage", listener: (ev: StorageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "submit", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "suspend", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "timeupdate", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "unload", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "volumechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "waiting", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: string, listener: EventListener, dontFix?: boolean): void;
		once(target: Object, type: string, listener: EventListener, dontFix?: boolean): void;
		once(target: HTMLElement, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): void;
		once(target: Object, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): void;
	}
}
declare module "dojo/on"
{
	var on: Dojo.On;
	export = on;
}

// dojo/parser

declare module Dojo
{
	interface _ParseOptions
	{
		noStart?: boolean;
		rootNode?: HTMLElement;
		template?: boolean;
		inherited?: Object;
		scope?: string;
		propsThis?: Object;
		contextRequire?: Function;
	}

	interface Parser
	{
		parse(rootNode?: HTMLElement, options?: _ParseOptions): dijit._WidgetBase[];
		scan(root?: HTMLElement, options?: _ParseOptions): dojo.Promise<HTMLElement[]>;
		instantiate(nodes: HTMLElement[], mixin?: PropertiesMap, options?: _ParseOptions): dijit._WidgetBase[];
		construct(ctor: { (params?: Dijit.WidgetCreateOptions): dijit._WidgetBase; }, node: HTMLElement, mixin?: PropertiesMap, options?: _ParseOptions, scripts?: HTMLElement[], inherited?: Object): dijit._WidgetBase;
	}
}
declare module "dojo/parser" 
{
	var parser: Dojo.Parser;
	export = parser;
}

// dojo/promise/Promise

declare module "dojo/promise/Promise" 
{
	class Promise<T> extends dojo.Promise<T> { }
	export = Promise;
}

// dojo/promise/all

declare module Dojo
{
	module Promise
	{
		interface All
		{
			<T>(promises: dojo.Promise<T>[]): dojo.Promise<T[]>;
			<T>(promises: Dojo.Dictionary<dojo.Promise<T>>): dojo.Promise<Dojo.Dictionary<T>>;
			<T>(promises: any): dojo.Promise<T>;
		}
	}
}
declare module "dojo/promise/all" 
{
	var all: Dojo.Promise.All;
	export = all;
}

// dojo/promise/first

declare module Dojo
{
	module Promise
	{
		interface First
		{
			<T>(promises: dojo.Promise<T>[]): dojo.Promise<T>;
			<T>(promises: Dojo.Dictionary<dojo.Promise<T>>): dojo.Promise<T>;
			<T>(promises: any): dojo.Promise<T>;
		}
	}
}
declare module "dojo/promise/first" 
{
	var first: Dojo.Promise.First;
	export = first;
}

// dojo/query

declare module Dojo
{
	interface Query
	{
		(selector: string, contextId?: string): dojo.NodeList;
		(selector: string, thisObject?: Object): dojo.NodeList;

		NodeList: dojo.NodeList;
	}
}
declare module "dojo/query"
{
	var query: Dojo.Query;
	export = query;
}
declare module "dojo/query!css2"
{
	var query: Dojo.Query;
	export = query;
}
declare module "dojo/query!lite"
{
	var query: Dojo.Query;
	export = query;
}
declare module "dojo/query!css2.1"
{
	var query: Dojo.Query;
	export = query;
}
declare module "dojo/query!css3"
{
	var query: Dojo.Query;
	export = query;
}
declare module "dojo/query!acme"
{
	var query: Dojo.Query;
	export = query;
}

// dojo/regexp

declare module Dojo
{
	interface RegExp
	{
		buildGroupRE(arr: any, re: (item: any) => RegExp, nonCapture?: boolean): RegExp;
		buildGroupRE(arr: any[], re: (item: any) => RegExp, nonCapture?: boolean): RegExp;

		escapeString(str: string, except?: string): string;
		group(expression: string, nonCapture?: boolean): string;
	}
}
declare module "dojo/regexp"
{
	var regexp: Dojo.RegExp;
	export = regexp;
}

// dojo/request

declare module Dojo
{
	module Request
	{
		interface MethodOptions
		{
			method: string;
		}
		interface BaseOptions
		{
			handleAs?: string;
			headers?: { [header: string]: string; };
			sync?: boolean;
			data?: any;
			query?: any;
			timeout?: number;
			preventCache?: boolean;
		}
		interface Options extends BaseOptions, MethodOptions { }

		interface RequestObject<T, BaseOptions, Options>
		{
			<T>(url: string, options?: Options): dojo.Promise<T>;
			get<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			put<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			post<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			del<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
		}
	}
}

declare module Dojo
{
	module Request
	{
		interface Base
		{
			<T>(url: string, options?: Options): dojo.Promise<T>;
			get<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			put<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			post<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			del<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
		}
	}
}
declare module "dojo/request"
{
	var request: Dojo.Request.Base;
	export = request;
}

declare module Dojo
{
	module Request
	{
		module Xhr
		{
			interface BaseOptions extends Request.BaseOptions { }
			interface Options extends BaseOptions, MethodOptions { }

			interface Base
			{
				<T>(url: string, options?: Options): dojo.Promise<T>;
				get<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
				put<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
				post<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
				del<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			}
		}
	}
}
declare module "dojo/request/xhr"
{
	var request: Dojo.Request.Xhr.Base;
	export = request;
}

declare module Dojo
{
	module Request
	{
		module Node
		{
			interface BaseOptions extends Request.BaseOptions
			{
				user: string;
				password: string;
			}
			interface Options extends BaseOptions, MethodOptions { }

			interface Base
			{
				<T>(url: string, options?: Options): dojo.Promise<T>;
				get<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
				put<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
				post<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
				del<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			}
		}
	}
}
declare module "dojo/request/node"
{
	var request: Dojo.Request.Node.Base;
	export = request;
}

declare module Dojo
{
	module Request
	{
		module iFrame
		{
			interface BaseOptions extends Request.BaseOptions
			{
				form?: HTMLElement;
			}
			interface Options extends BaseOptions, MethodOptions { }

			interface Base
			{
				<T>(url: string, options?: Options): dojo.Promise<T>;
				get<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
				post<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			}
		}
	}
}
declare module "dojo/request/iframe" 
{
	var request: Dojo.Request.iFrame.Base;
	export = request;
}

declare module Dojo
{
	module Request
	{
		module Script
		{
			interface BaseOptions extends Request.BaseOptions
			{
				frameDoc?: HTMLDocument;
				jsonp?: string;
				checkString?: string;
			}
			interface Options extends BaseOptions, MethodOptions { }

			interface Base
			{
				<T>(url: string, options?: Options): dojo.Promise<T>;
				get<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
				post<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			}
		}
	}
}
declare module "dojo/request/script"
{
	var request: Dojo.Request.Script.Base;
	export = request;
}

declare module Dojo
{
	module Request
	{
		interface Handlers
		{
			register(name: string, handler: (response: any) => any): void;
		}
	}
}
declare module "dojo/request/handlers"
{
	var handlers: Dojo.Request.Handlers;
	export = handlers;
}

declare module Dojo
{
	module Request
	{
		interface Notify
		{
			notify(type?: "start", listener?: SimpleAction): RemovableHandle;
			notify(type?: "send", listener?: (response: any, cancel: () => void ) => void ): RemovableHandle;
			notify(type?: "load", listener?: (response: any) => void ): RemovableHandle;
			notify(type?: "error", listener?: (error: any) => void ): RemovableHandle;
			notify(type?: "done", listener?: (responseOrError: any) => void ): RemovableHandle;
			notify(type?: "stop", listener?: SimpleAction): RemovableHandle;
			notify(type?: string, listener?: Action): RemovableHandle;
		}
	}
}
declare module "dojo/request/notify"
{
	var notify: Dojo.Request.Notify;
	export = notify;
}

declare module Dojo
{
	module Request
	{
		interface Registry
		{
			<T>(url: string, options?: Options): dojo.Promise<T>;

			get<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			put<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			post<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			del<T>(url: string, options?: BaseOptions): dojo.Promise<T>;

			register<T>(url: string, provider: RequestObject<T, BaseOptions, Options>, first?: boolean): RemovableHandle;
			register<T>(url: RegExp, provider: RequestObject<T, BaseOptions, Options>, first?: boolean): RemovableHandle;
			register<T>(url: (url: string, options: Options) => boolean, provider: RequestObject<T, BaseOptions, Options>, first?: boolean): RemovableHandle;
		}
	}
}
declare module "dojo/request/registry"
{
	var registry: Dojo.Request.Registry;
	export = registry;
}

// dojo/router

declare module Dojo
{
	interface RouterEvent
	{
		params: Dojo.Dictionary<string>;
		oldPath: string;
		newPath: string;
		preventDefault: Dojo.SimpleAction;
		stopImmediatePropagation: Dojo.SimpleAction;
	}
	interface Router
	{
		register(route: string, callback: (ev: RouterEvent) => void ): RemovableHandle;
		register(route: RegExp, callback: (ev: RouterEvent) => void ): RemovableHandle;

		registerBefore(route: string, callback: (ev: RouterEvent) => void ): RemovableHandle;
		registerBefore(route: RegExp, callback: (ev: RouterEvent) => void ): RemovableHandle;

		startup(defaultPath?: string): void;
		destroy(): void;
		go(path: string, replace?: boolean): boolean;
	}
}
declare module "dojo/router"
{
	var router: Dojo.Router;
	export = router;
}

// dojo/sniff

declare module Dojo
{
	interface Sniff extends Has { }
}
declare module "dojo/sniff"
{
	var sniff: Dojo.Sniff;
	export = sniff;
}

// dojo/text

declare module "dojo/text"
{
}

// dojo/topic

declare module Dojo
{
	interface Topic
	{
		subscribe(topic: string, listener: Action): RemovableHandle;
		publish(topic: string, ...v_args: any[]): void;
	}
}
declare module "dojo/topic" 
{
	var topic: Dojo.Topic;
	export = topic;
}

// dojo/Stateful

declare module "dojo/Stateful"
{
	var Stateful: dojo.Stateful;
	export = Stateful;
}

// dojo/string

declare module Dojo
{
	interface String
	{
		pad(text: string, size: number, ch?: string, end?: boolean): string;
		rep(str: string, num: number): string;

		substitute(template: string, map: { [text: string]: string; }, transform?: (value: any, key: string) => string, thisObject?: Object): string;
		substitute(template: string, map: string[], transform?: (value: any, key: string) => string, thisObject?: Object): string;

		trim(str: string): string;
	}
}
declare module "dojo/string"
{
	var str: Dojo.String;
	export = str;
}

// dojo/touch

declare module Dojo
{
	interface Touch
	{
		cancel(node: HTMLElement, listener: (ev: MouseEvent) => boolean): RemovableHandle;
		enter(node: HTMLElement, listener: (ev: MouseEvent) => boolean): RemovableHandle;
		leave(node: HTMLElement, listener: (ev: MouseEvent) => boolean): RemovableHandle;
		move(node: HTMLElement, listener: (ev: MouseEvent) => boolean): RemovableHandle;
		out(node: HTMLElement, listener: (ev: MouseEvent) => boolean): RemovableHandle;
		over(node: HTMLElement, listener: (ev: MouseEvent) => boolean): RemovableHandle;
		press(node: HTMLElement, listener: (ev: MouseEvent) => boolean): RemovableHandle;
		release(node: HTMLElement, listener: (ev: MouseEvent) => boolean): RemovableHandle;
	}
}
declare module "dojo/touch"
{
	var touch: Dojo.Touch;
	export = touch;
}

// dojo/uacss

declare module Dojo
{
	interface Uacss extends Has { }
}
declare module "dojo/uacss"
{
	var uacss: Dojo.Uacss;
	export = uacss;
}

// dojo/when

declare module Dojo
{
	interface When
	{
		<T>(value: T): dojo.Promise<T>;
		<T, V>(value: T, callback: (value: T) => V, errback?: (error: any) => void , progback?: (update: any) => void ): V;
		<T>(promise: dojo.Promise<T>): dojo.Promise<T>;
		<T, V>(promise: dojo.Promise<T>, callback: (value: T) => V, errback?: (error: any) => void , progback?: (update: any) => void ): dojo.Promise<V>;
	}
}
declare module "dojo/when"
{
	var when: Dojo.When;
	export = when;
}

// dojo/window

declare module Dojo
{
	interface Window
	{
		get(doc: HTMLDocument): Window;
		getBox(doc: HTMLDocument): Position;
		scrollIntoView(node: HTMLElement, pos?: Object): void;
	}
}
declare module "dojo/window"
{
	var window: Dojo.Window;
	export = window;
}
