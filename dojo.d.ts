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
declare function require(module: "dojo/ready"): Dojo.Ready;

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
declare function require(module: "dojo/domReady"): Dojo.DomReady;

// dojo/_base/array

declare module Dojo
{
	interface Array
	{
		indexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;
		lastIndexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;

		forEach<T>(array: T[], callback: string | ((item: T, index: number, array: T[]) => void), thisObject?: Object): void;
		forEach(array: string, callback: string | ((item: string, index: number, array: string) => void), thisObject?: Object): void;

		filter<T>(array: T[], callback: string | ((item: T, index: number, array: T[]) => boolean), thisObject?: Object): T[];
		filter(array: string, callback: string | ((item: string, index: number, array: string) => boolean), thisObject?: Object): string[];

		map<T, V>(array: T[], callback: string | ((item: T, index: number, array: T[]) => V), thisObject?: Object): V[];
		map<V>(array: string, callback: string | ((item: string, index: number, array: string) => V), thisObject?: Object): V[];

		some<T>(array: T[], callback: string | ((item: T, index: number, array: T[]) => boolean), thisObject?: Object): boolean;
		some(array: string, callback: string | ((item: string, index: number, array: string) => boolean), thisObject?: Object): boolean;

		every<T>(array: T[], callback: string | ((item: T, index: number, array: T[]) => boolean), thisObject?: Object): boolean;
		every(array: string, callback: string | ((item: string, index: number, array: string) => boolean), thisObject?: Object): boolean;
	}
}
declare module "dojo/_base/array"
{
	var array: Dojo.Array;
	export = array;
}
declare function require(module: "dojo/_base/array"): Dojo.Array;

// dojo/_base/browser

declare module "dojo/_base/browser"
{
}
declare function require(module: "dojo/_base/browser"): void;

// dojo/_base/Color

declare module Dojo
{
	class Color
	{
		constructor();
		constructor(colors: number[]);
		constructor(colors: [number, number, number]);
		constructor(colors: [number, number, number, number]);
		constructor(color: string);
		constructor(color: { r: number, g: number, b: number, a?: number });

		a: number;
		r: number;
		g: number;
		b: number;

		toRgb(): [number, number, number];
		toRgba(): [number, number, number, number];
		toHex(): string;
		toCss(alpha?: boolean): string;
	}

	module Color
	{
		interface NamedColors
		{
			"aliceblue": [number, number, number];
			"antiquewhite": [number, number, number];
			"aquamarine": [number, number, number];
			"azure": [number, number, number];
			"beige": [number, number, number];
			"bisque": [number, number, number];
			"blanchedalmond": [number, number, number];
			"blueviolet": [number, number, number];
			"brown": [number, number, number];
			"burlywood": [number, number, number];
			"cadetblue": [number, number, number];
			"chartreuse": [number, number, number];
			"chocolate": [number, number, number];
			"coral": [number, number, number];
			"cornflowerblue": [number, number, number];
			"cornsilk": [number, number, number];
			"crimson": [number, number, number];
			"cyan": [number, number, number];
			"darkblue": [number, number, number];
			"darkcyan": [number, number, number];
			"darkgoldenrod": [number, number, number];
			"darkgray": [number, number, number];
			"darkgreen": [number, number, number];
			"darkgrey": [number, number, number];
			"darkkhaki": [number, number, number];
			"darkmagenta": [number, number, number];
			"darkolivegreen": [number, number, number];
			"darkorange": [number, number, number];
			"darkorchid": [number, number, number];
			"darkred": [number, number, number];
			"darksalmon": [number, number, number];
			"darkseagreen": [number, number, number];
			"darkslateblue": [number, number, number];
			"darkslategray": [number, number, number];
			"darkslategrey": [number, number, number];
			"darkturquoise": [number, number, number];
			"darkviolet": [number, number, number];
			"deeppink": [number, number, number];
			"deepskyblue": [number, number, number];
			"dimgray": [number, number, number];
			"dimgrey": [number, number, number];
			"dodgerblue": [number, number, number];
			"firebrick": [number, number, number];
			"floralwhite": [number, number, number];
			"forestgreen": [number, number, number];
			"gainsboro": [number, number, number];
			"ghostwhite": [number, number, number];
			"gold": [number, number, number];
			"goldenrod": [number, number, number];
			"greenyellow": [number, number, number];
			"grey": [number, number, number];
			"honeydew": [number, number, number];
			"hotpink": [number, number, number];
			"indianred": [number, number, number];
			"indigo": [number, number, number];
			"ivory": [number, number, number];
			"khaki": [number, number, number];
			"lavender": [number, number, number];
			"lavenderblush": [number, number, number];
			"lawngreen": [number, number, number];
			"lemonchiffon": [number, number, number];
			"lightblue": [number, number, number];
			"lightcoral": [number, number, number];
			"lightcyan": [number, number, number];
			"lightgoldenrodyellow": [number, number, number];
			"lightgray": [number, number, number];
			"lightgreen": [number, number, number];
			"lightgrey": [number, number, number];
			"lightpink": [number, number, number];
			"lightsalmon": [number, number, number];
			"lightseagreen": [number, number, number];
			"lightskyblue": [number, number, number];
			"lightslategray": [number, number, number];
			"lightslategrey": [number, number, number];
			"lightsteelblue": [number, number, number];
			"lightyellow": [number, number, number];
			"limegreen": [number, number, number];
			"linen": [number, number, number];
			"magenta": [number, number, number];
			"mediumaquamarine": [number, number, number];
			"mediumblue": [number, number, number];
			"mediumorchid": [number, number, number];
			"mediumpurple": [number, number, number];
			"mediumseagreen": [number, number, number];
			"mediumslateblue": [number, number, number];
			"mediumspringgreen": [number, number, number];
			"mediumturquoise": [number, number, number];
			"mediumvioletred": [number, number, number];
			"midnightblue": [number, number, number];
			"mintcream": [number, number, number];
			"mistyrose": [number, number, number];
			"moccasin": [number, number, number];
			"navajowhite": [number, number, number];
			"oldlace": [number, number, number];
			"olivedrab": [number, number, number];
			"orange": [number, number, number];
			"orangered": [number, number, number];
			"orchid": [number, number, number];
			"palegoldenrod": [number, number, number];
			"palegreen": [number, number, number];
			"paleturquoise": [number, number, number];
			"palevioletred": [number, number, number];
			"papayawhip": [number, number, number];
			"peachpuff": [number, number, number];
			"peru": [number, number, number];
			"pink": [number, number, number];
			"plum": [number, number, number];
			"powderblue": [number, number, number];
			"rosybrown": [number, number, number];
			"royalblue": [number, number, number];
			"saddlebrown": [number, number, number];
			"salmon": [number, number, number];
			"sandybrown": [number, number, number];
			"seagreen": [number, number, number];
			"seashell": [number, number, number];
			"sienna": [number, number, number];
			"skyblue": [number, number, number];
			"slateblue": [number, number, number];
			"slategray": [number, number, number];
			"slategrey": [number, number, number];
			"snow": [number, number, number];
			"springgreen": [number, number, number];
			"steelblue": [number, number, number];
			"tan": [number, number, number];
			"thistle": [number, number, number];
			"tomato": [number, number, number];
			"turquoise": [number, number, number];
			"violet": [number, number, number];
			"wheat": [number, number, number];
			"whitesmoke": [number, number, number];
			"yellowgreen": [number, number, number];
		}

		var named: NamedColors;
	}
}
declare module "dojo/_base/Color"
{
	class color extends Dojo.Color { }

	module color
	{
		var named: Dojo.Color.NamedColors;
	}

	export = color;
}
declare function require(module: "dojo/_base/Color"): Dojo.Color;

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
		transparentColor: [number, number, number];
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
declare function require(module: "dojo/_base/config"): Dojo.Config;

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
			anim(nodeId: string | HTMLElement, properties: PropertiesMap, duration?: number, easing?: EasingFunction, onEnd?: SimpleAction, delay?: number): dojo.Animation;
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
declare function require(module: "dojo/_base/fx"): Dojo.Fx.Base;

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

		hitch<F extends Function>(scope: Object, method: string | F): F;
		mixin<T extends Object>(dest: T, ...sources: PropertiesMap[]): T;
		partial<F extends Function>(method: string | F, ...v_args: any[]): F;
		replace(tmpl: string, map: string[] | Dictionary<any> | ((matched: string, key: string, offset: number, template: string) => string), pattern?: string): string;
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
declare function require(module: "dojo/_base/lang"): Dojo.Lang;

// dojo/AdapterRegistry

declare module Dojo
{
	class AdapterRegistry
	{
		constructor(returnWrappers?: boolean);

		pairs: any[];
		returnWrappers: boolean;

		match(...args: any[]): void;
		register(name: string, check: FunctionReturning<boolean>, wrap: Action, directReturn?: boolean, override?: boolean): void;
		unregister(name: string): boolean;
	}
}
declare module "dojo/AdapterRegistry"
{
	export = Dojo.AdapterRegistry;
}
declare function require(module: "dojo/AdapterRegistry"): Dojo.AdapterRegistry;

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
declare function require(module: "dojo/aspect"): Dojo.Aspect;

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
declare function require(module: "dojo/back"): Dojo.Back;

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
declare function require(module: "dojo/cache"): Dojo.Cache;

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
declare function require(module: "dojo/cldr/monetary"): Dojo.Cldr.Monetary;

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
declare function require(module: "dojo/cldr/supplemental"): Dojo.Cldr.Supplemental;

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
declare function require(module: "dojo/cookie"): Dojo.Cookie;

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
declare function require(module: "dojo/currency"): Dojo.Currency;

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
declare function require(module: "dojo/date"): Dojo.Date.Base;

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
declare function require(module: "dojo/date/stamp"): Dojo.Date.Stamp;

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
declare function require(module: "dojo/date/locale"): Dojo.Date.Locale;

// dojo/Deferred

declare module dojo
{
	class Deferred<T>
	{
		constructor(canceler?: (reason: any) => void);

		promise: Promise<T>;

		isCanceled(): boolean;
		isFulfilled(): boolean;
		isRejected(): boolean;
		isResolved(): boolean;

		progress(update: any, strict?: boolean): void;
		reject(reason: any, strict?: boolean): void;
		resolve(value: T, strict?: boolean): void;
		cancel(reason: any, strict?: boolean): any;
		then<V>(callback?: (value: T) => V | Promise<V> | Deferred<V>, errback?: (error: any) => void, progback?: (progress: any) => void): Promise<V>;
	}
}
declare module "dojo/Deferred"
{
	var Deferred: typeof dojo.Deferred;
	export = Deferred;
}
declare function require<T>(depends: "dojo/Deferred"): dojo.Deferred<T>;

// dojo/dom

declare module Dojo
{
	interface Dom
	{
		byId<T extends HTMLElement>(node: string | T): T;
		isDescendant(nbode: string | HTMLElement, ancestor: string | HTMLElement): boolean;
		setSelectable(node: string | HTMLElement, selectable: boolean): void;
	}
}
declare module "dojo/dom"
{
	var dom: Dojo.Dom;
	export = dom;
}
declare function require(module: "dojo/dom"): Dojo.Dom;

// dojo/dom-attr

declare module Dojo
{
	interface DomAttr
	{
		has(node: string | HTMLElement, attr: string): boolean;
		get(node: string | HTMLElement, attr: string): string;
		set(node: string | HTMLElement, attr: string, value: string): void;
		set(node: string | HTMLElement, values: AttributesMap): void;
		remove(node: string | HTMLElement, attr: string): string;
		getNodeProp(node: string | HTMLElement, attr: string): any;
	}
}
declare module "dojo/dom-attr"
{
	var domAttr: Dojo.DomAttr;
	export = domAttr;
}
declare function require(module: "dojo/dom-attr"): Dojo.DomAttr;

// dojo/dom-class

declare module Dojo
{
	interface DomClass
	{
		contains(node: string | HTMLElement, className: string): boolean;
		add(node: string | HTMLElement, classNames: string | string[]): void;
		remove(node: string | HTMLElement, classNames?: string | string[]): void;
		replace(node: string | HTMLElement, addClassNames: string | string[], removeClassNames: string | string[]): void;
		toggle(node: string | HTMLElement, className: string, addRemove?: boolean): void;
	}
}
declare module "dojo/dom-class"
{
	var domClass: Dojo.DomClass;
	export = domClass;
}
declare function require(module: "dojo/dom-class"): Dojo.DomClass;

// dojo/dom-construct

declare module Dojo
{
	interface DomConstruct
	{
		toDom(frag: string, doc?: HTMLDocument): HTMLElement;
		place<T extends HTMLElement>(node: string | T, refNode: string | HTMLElement, pos?: string | number): T;

		create(id: "a", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLAnchorElement
		create(id: "abbr", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "address", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "area", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLAreaElement
		create(id: "article", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "aside", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "audio", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLAudioElement
		create(id: "b", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "base", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLBaseElement
		create(id: "bdi", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "bdo", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "blockquote", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLQuoteElement
		create(id: "body", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLBodyElement
		create(id: "br", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLBRElement
		create(id: "button", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLButtonElement
		create(id: "canvas", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLCanvasElement
		create(id: "caption", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableCaptionElement
		create(id: "cite", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "code", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "col", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableColElement
		create(id: "colgroup", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableColElement
		create(id: "datalist", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLDataListElement
		create(id: "dd", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "del", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLModElement
		create(id: "dfn", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "div", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLDivElement
		create(id: "dl", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLDListElement
		create(id: "dt", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "em", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "embed", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLEmbedElement
		create(id: "fieldset", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLFieldSetElement
		create(id: "figcaption", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "figure", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "footer", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "form", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLFormElement
		create(id: "h1", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h2", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h3", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h4", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h5", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h6", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "head", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLHeadElement
		create(id: "header", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "hgroup", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "hr", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLHRElement
		create(id: "html", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLHtmlElement
		create(id: "i", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "iframe", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLIFrameElement
		create(id: "img", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLImageElement
		create(id: "input", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLInputElement
		create(id: "ins", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLModElement
		create(id: "kbd", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "label", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLLabelElement
		create(id: "legend", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLLegendElement
		create(id: "li", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLLIElement
		create(id: "link", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLLinkElement
		create(id: "main", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "map", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLMapElement
		create(id: "mark", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "menu", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLMenuElement
		create(id: "meta", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLMetaElement
		create(id: "nav", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "noscript", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "object", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLObjectElement
		create(id: "ol", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLOListElement
		create(id: "optgroup", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLOptGroupElement
		create(id: "option", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLOptionElement
		create(id: "p", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLParagraphElement
		create(id: "param", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLParamElement
		create(id: "pre", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLPreElement
		create(id: "progress", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLProgressElement
		create(id: "q", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLQuoteElement
		create(id: "rp", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "rt", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "ruby", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "s", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "samp", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "script", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLScriptElement
		create(id: "section", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "select", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLSelectElement
		create(id: "small", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "source", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLSourceElement
		create(id: "span", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLSpanElement
		create(id: "strong", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "style", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLStyleElement
		create(id: "sub", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "summary", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "sup", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "table", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableElement
		create(id: "tbody", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableSectionElement
		create(id: "td", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableDataCellElement
		create(id: "textarea", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTextAreaElement
		create(id: "tfoot", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableSectionElement
		create(id: "th", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableHeaderCellElement
		create(id: "thead", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableSectionElement
		create(id: "title", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTitleElement
		create(id: "tr", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTableRowElement
		create(id: "track", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLTrackElement
		create(id: "u", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "ul", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLUListElement
		create(id: "var", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: "video", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLVideoElement
		create(id: "wbr", attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement
		create(id: string, attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): HTMLElement;

		create<T extends HTMLElement>(tag: T, attrs?: AttributesMap, refNode?: string | HTMLElement, pos?: string): T;
		empty(node: string | HTMLElement): void;
		destroy(node: string | HTMLElement): void;
	}
}
declare module "dojo/dom-construct"
{
	var domConstruct: Dojo.DomConstruct;
	export = domConstruct;
}
declare function require(module: "dojo/dom-construct"): Dojo.DomConstruct;

// dojo/dom-form

declare module Dojo
{
	interface DomForm
	{
		fieldToObject(inputNode: string | HTMLElement): any;
		toJson(formNode: string | HTMLElement, prettyPrint?: boolean): string;
		toObject(formNode: string | HTMLElement): Object;
		toQuery(formNode: string | HTMLElement): string;
	}
}
declare module "dojo/dom-form"
{
	var domForm: Dojo.DomForm;
	export = domForm;
}
declare function require(module: "dojo/dom-form"): Dojo.DomForm;

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
		position(node: string | HTMLElement, includeScroll?: boolean): Position;
		setContentSize(node: HTMLElement, box: Size, computedStyle?: StylesMap): void;
		setMarginBox(node: HTMLElement, box: Size, computedStyle?: StylesMap): void;
	}
}
declare module "dojo/dom-geometry"
{
	var domGeometry: Dojo.DomGeometry;
	export = domGeometry;
}
declare function require(module: "dojo/dom-geometry"): Dojo.DomGeometry;

// dojo/dom-prop

declare module Dojo
{
	interface DomProp
	{
		get(node: string | HTMLElement, attr: string): string;

		set(node: string | HTMLElement, attr: string, value: string): void;
		set(node: string | HTMLElement, values: AttributesMap): void;
	}
}
declare module "dojo/dom-prop"
{
	var domProp: Dojo.DomProp;
	export = domProp;
}
declare function require(module: "dojo/dom-prop"): Dojo.DomProp;

// dojo/dom-style

declare module Dojo
{
	interface DomStyle
	{
		getComputedStyle(node: HTMLElement): StylesMap;

		get(node: string | HTMLElement, style?: string): StylesMap;

		set(node: string | HTMLElement, style: string, value: string): void;
		set(node: string | HTMLElement, values: StylesMap): void;
	}
}
declare module "dojo/dom-style"
{
	var domStyle: Dojo.DomStyle;
	export = domStyle;
}
declare function require(module: "dojo/dom-style"): Dojo.DomStyle;

// dojo/Evented

declare module "dojo/Evented"
{
	var Evented: dojo.Evented;
	export = Evented;
}
declare function require(module: "dojo/Evented"): dojo.Evented;

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
declare function require(module: "dojo/fx"): Dojo.Fx.Module;

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
declare function require(module: "dojo/fx/easing"): Dojo.Fx.Easing;

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
	var Toggler: typeof Dojo.Fx.Toggler;
	export = Toggler;
}
declare function require(module: "dojo/fx/Toggler"): Dojo.Fx.Toggler;

// dojo/has

declare module Dojo
{
	interface Has
	{
		(feature: string | number): any;

		add(feature: string | number, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
		clearElement(element: Object): void;
		load<T>(id: string, parentRequire: Function, loaded: (m: T) => void): void;
		normalize(id: number, toAbsMid: (id: number) => number): void;
	}
}
declare module "dojo/has"
{
	var has: Dojo.Has;
	export = has;
}
declare function require(module: "dojo/has"): Dojo.Has;

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
declare function require(module: "dojo/hash"): Dojo.Hash;

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
		set(node: HTMLElement, content: string | HTMLElement | NodeList | dojo.NodeList | HTMLElement[], params?: _HtmlContentSetterOptions): void;
	}
}
declare module "dojo/html"
{
	var html: Dojo.Html;
	export = html;
}
declare function require(module: "dojo/html"): Dojo.Html;

// dojo/io-query

declare module Dojo
{
	interface IOQuery
	{
		objectToQuery(map: Dojo.Dictionary<any>): string;
		queryToObject(str: string): Dojo.Dictionary<string>;
	}
}
declare module "dojo/io-query"
{
	var ioQuery: Dojo.IOQuery;
	export = ioQuery;
}
declare function require(module: "dojo/io-query"): Dojo.IOQuery;

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
declare function require(module: "dojo/keys"): Dojo.Keys;

// dojo/json

declare module Dojo
{
	interface Json
	{
		parse(str: string, secured?: boolean): any;
		stringify(obj: any, replacer?: any[] | ((key: string, value: string) => any), space?: boolean): string;
	}
}
declare module "dojo/json"
{
	var json: Dojo.Json;
	export = json;
}
declare function require(module: "dojo/json"): Dojo.Json;

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
declare function require(module: "dojo/mouse"): Dojo.Mouse;

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
	type NodesLike = HTMLElement | HTMLElement[] | _HTMLNodeList | dojo.NodeList;

	class NodeList
	{
		constructor(node: NodesLike);

		// Make NodeList array-like
		length: number;
		[index: number]: HTMLElement;

		addClass(classNames: string | string[]): dojo.NodeList;
		addClassFx(classNames: string | string[], options?: Dojo.Fx.CreateOptions): Animation;
		addContent(content: string | NodesLike | { template: string; parse?: boolean; templateFunc?: (template: string, content: Object) => Object; }, position?: string | number): dojo.NodeList;
		adopt(nodes: string | NodesLike, position?: string | number): dojo.NodeList;
		after(content: string | Object | NodesLike): dojo.NodeList;
		andSelf(): dojo.NodeList;
		anim(properties: Dojo.PropertiesMap, duration?: number, easing?: Dojo.Fx.EasingFunction, onEnd?: Dojo.SimpleAction, delay?: number): Animation;
		animateProperty(args: Dojo.Fx.AutoCreateOptions | Dojo.Fx.CreateOptions): dojo.NodeList;
		append(content: string | Object | NodesLike): dojo.NodeList;
		appendTo(query: string): dojo.NodeList;
		at(...index: number[]): dojo.NodeList;

		attr(property: string): string[];
		attr(property: string, value: string): dojo.NodeList;

		before(content: string | Object | NodesLike): dojo.NodeList;
		children(query?: string): dojo.NodeList;
		clone(): dojo.NodeList;
		closest(query: string, root?: string | Object): HTMLElement;
		concat(...items: HTMLElement[]): dojo.NodeList;

		connect(methodName: string, func: string | Function): dojo.NodeList;
		connect(methodName: string, obj: Object, funcName: string): dojo.NodeList;

		data(key: Dojo.PropertiesMap): dojo.NodeList;
		data(key: string): any;
		data(key: string, value: any): dojo.NodeList;

		delegate(selector: string, eventName: "abort", listener: Dojo.EventListener<UIEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "afterprint", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "beforeprint", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "beforeunload", listener: Dojo.EventListener<BeforeUnloadEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "blur", listener: Dojo.EventListener<FocusEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "canplay", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "canplaythrough", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "change", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "click", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "contextmenu", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "dblclick", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "drag", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "dragend", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "dragenter", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "dragleave", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "dragover", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "dragstart", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "drop", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "durationchange", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "emptied", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "ended", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "focus", listener: Dojo.EventListener<FocusEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "hashchange", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "input", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "keydown", listener: Dojo.EventListener<KeyboardEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "keypress", listener: Dojo.EventListener<KeyboardEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "keyup", listener: Dojo.EventListener<KeyboardEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "load", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "loadeddata", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "loadedmetadata", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "loadstart", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "message", listener: Dojo.EventListener<MessageEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "mousedown", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "mousemove", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "mouseout", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "mouseover", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "mouseup", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "mousewheel", listener: Dojo.EventListener<MouseWheelEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "offline", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "online", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "pause", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "play", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "playing", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "progress", listener: (ev: any) => void): dojo.NodeList;
		delegate(selector: string, eventName: "ratechange", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "readystatechange", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "reset", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "resize", listener: Dojo.EventListener<UIEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "scroll", listener: Dojo.EventListener<UIEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "seeked", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "seeking", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "select", listener: Dojo.EventListener<UIEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "stalled", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "storage", listener: Dojo.EventListener<StorageEvent>): dojo.NodeList;
		delegate(selector: string, eventName: "submit", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "suspend", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "timeupdate", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "unload", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "volumechange", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: "waiting", listener: EventListener): dojo.NodeList;
		delegate(selector: string, eventName: string, listener: EventListener): dojo.NodeList;

		dtl(template: string, thisObject?: Object): dojo.NodeList;
		empty(): dojo.NodeList;
		end(): dojo.NodeList;
		even(): dojo.NodeList;
		every(callback: (node: HTMLElement, index: number, list: dojo.NodeList) => boolean, thisObject?: Object): boolean;
		fadeIn(args?: Dojo.Fx.AutoBaseCreateOptions | Dojo.Fx.BaseCreateOptions): dojo.NodeList;
		fadeOut(args?: Dojo.Fx.AutoBaseCreateOptions | Dojo.Fx.BaseCreateOptions): dojo.NodeList;
		filter(filter: string | ((item: HTMLElement, index: number, list: dojo.NodeList) => boolean)): dojo.NodeList;
		first(): dojo.NodeList;
		forEach(callback: (item: HTMLElement, index: number, list: dojo.NodeList) => void, thisObject?: Object): dojo.NodeList;

		html(): string;
		html(content: string | NodesLike): dojo.NodeList;

		indexOf(value: HTMLElement, fromIndex?: number): number;

		innerHTML(): string;
		innerHTML(content: string | NodesLike): dojo.NodeList;

		insertAfter(query: string): dojo.NodeList;
		insertBefore(query: string): dojo.NodeList;
		instantiate(declaredClass: string, properties?: Dojo.PropertiesMap): dojo.NodeList;
		last(): dojo.NodeList;
		lastIndexOf(value: HTMLElement, fromIndex?: number): number;
		map(func: (item: HTMLElement, index: number, list: dojo.NodeList) => HTMLElement, thisObject?: Object): dojo.NodeList;
		marginBox(): Position;
		next(query?: string): HTMLElement;
		nextAll(query?: string): dojo.NodeList;
		odd(): dojo.NodeList;

		on(name: "abort", listener: Dojo.EventListener<UIEvent>): dojo.NodeList;
		on(name: "afterprint", listener: EventListener): dojo.NodeList;
		on(name: "beforeprint", listener: EventListener): dojo.NodeList;
		on(name: "beforeunload", listener: Dojo.EventListener<BeforeUnloadEvent>): dojo.NodeList;
		on(name: "blur", listener: Dojo.EventListener<FocusEvent>): dojo.NodeList;
		on(name: "canplay", listener: EventListener): dojo.NodeList;
		on(name: "canplaythrough", listener: EventListener): dojo.NodeList;
		on(name: "change", listener: EventListener): dojo.NodeList;
		on(name: "click", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		on(name: "contextmenu", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		on(name: "dblclick", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		on(name: "drag", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		on(name: "dragend", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		on(name: "dragenter", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		on(name: "dragleave", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		on(name: "dragover", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		on(name: "dragstart", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		on(name: "drop", listener: Dojo.EventListener<DragEvent>): dojo.NodeList;
		on(name: "durationchange", listener: EventListener): dojo.NodeList;
		on(name: "emptied", listener: EventListener): dojo.NodeList;
		on(name: "ended", listener: EventListener): dojo.NodeList;
		on(name: "focus", listener: Dojo.EventListener<FocusEvent>): dojo.NodeList;
		on(name: "hashchange", listener: EventListener): dojo.NodeList;
		on(name: "input", listener: EventListener): dojo.NodeList;
		on(name: "keydown", listener: Dojo.EventListener<KeyboardEvent>): dojo.NodeList;
		on(name: "keypress", listener: Dojo.EventListener<KeyboardEvent>): dojo.NodeList;
		on(name: "keyup", listener: Dojo.EventListener<KeyboardEvent>): dojo.NodeList;
		on(name: "load", listener: EventListener): dojo.NodeList;
		on(name: "loadeddata", listener: EventListener): dojo.NodeList;
		on(name: "loadedmetadata", listener: EventListener): dojo.NodeList;
		on(name: "loadstart", listener: EventListener): dojo.NodeList;
		on(name: "message", listener: Dojo.EventListener<MessageEvent>): dojo.NodeList;
		on(name: "mousedown", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		on(name: "mousemove", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		on(name: "mouseout", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		on(name: "mouseover", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		on(name: "mouseup", listener: Dojo.EventListener<MouseEvent>): dojo.NodeList;
		on(name: "mousewheel", listener: Dojo.EventListener<MouseWheelEvent>): dojo.NodeList;
		on(name: "offline", listener: EventListener): dojo.NodeList;
		on(name: "online", listener: EventListener): dojo.NodeList;
		on(name: "pause", listener: EventListener): dojo.NodeList;
		on(name: "play", listener: EventListener): dojo.NodeList;
		on(name: "playing", listener: EventListener): dojo.NodeList;
		on(name: "progress", listener: (ev: any) => void): dojo.NodeList;
		on(name: "ratechange", listener: EventListener): dojo.NodeList;
		on(name: "readystatechange", listener: EventListener): dojo.NodeList;
		on(name: "reset", listener: EventListener): dojo.NodeList;
		on(name: "resize", listener: Dojo.EventListener<UIEvent>): dojo.NodeList;
		on(name: "scroll", listener: Dojo.EventListener<UIEvent>): dojo.NodeList;
		on(name: "seeked", listener: EventListener): dojo.NodeList;
		on(name: "seeking", listener: EventListener): dojo.NodeList;
		on(name: "select", listener: Dojo.EventListener<UIEvent>): dojo.NodeList;
		on(name: "stalled", listener: EventListener): dojo.NodeList;
		on(name: "storage", listener: Dojo.EventListener<StorageEvent>): dojo.NodeList;
		on(name: "submit", listener: EventListener): dojo.NodeList;
		on(name: "suspend", listener: EventListener): dojo.NodeList;
		on(name: "timeupdate", listener: EventListener): dojo.NodeList;
		on(name: "unload", listener: EventListener): dojo.NodeList;
		on(name: "volumechange", listener: EventListener): dojo.NodeList;
		on(name: "waiting", listener: EventListener): dojo.NodeList;
		on(name: string, listener: EventListener): dojo.NodeList;
		on(type: Dojo.ExtensionEvent, listener: Dojo.Action): dojo.NodeList;

		orphan(filter?: string): dojo.NodeList;
		parent(query?: string): dojo.NodeList;
		parents(query?: string): dojo.NodeList;
		place(query: string | HTMLElement, position?: string | number): dojo.NodeList;
		position(): Dojo.Rectangle;
		prepend(content: string | Object | NodesLike): dojo.NodeList;
		prependTo(query: string): dojo.NodeList;
		prev(query?: string): HTMLElement;
		prevAll(query?: string): dojo.NodeList;
		query(query: string): dojo.NodeList;
		remove(filter?: string): dojo.NodeList;
		removeAttr(name: string): dojo.NodeList;
		removeClass(classNames?: string | string[]): dojo.NodeList;
		removeClassFx(classNames: string | string[], args?: Dojo.Fx.CreateOptions): Animation;
		removeData(key?: string): dojo.NodeList;
		replaceAll(query: string): dojo.NodeList;
		replaceClass(addClasses: string | string[], removeClasses?: string | string[]): dojo.NodeList;
		replaceWith(content: string | Object | NodesLike): dojo.NodeList;
		siblings(query?: string): dojo.NodeList;
		slice(begin: number, end?: number): dojo.NodeList;
		slideTo(args: Dojo.Fx.AutoSlideCreateOptions | Dojo.Fx.SlideCreateOptions): Animation;
		some(callback: (node: HTMLElement, index: number, list: dojo.NodeList) => boolean, thisObject?: Object): boolean;
		splice(index: number, howmany?: number, ...items: HTMLElement[]): dojo.NodeList;

		style(property: string): string[];
		style(property: string, value: string): dojo.NodeList;

		text(): string;
		text(value: string): dojo.NodeList;

		toggleClass(className: string, condition?: boolean): dojo.NodeList;
		toggleClassFx(className: string, condition?: boolean, options?: Dojo.Fx.CreateOptions): Animation;

		val(): string;
		val(values: string | string[]): dojo.NodeList;

		wipeIn(args: Dojo.Fx.AutoCreateOptions | Dojo.Fx.CreateOptions): dojo.NodeList;
		wipeOut(args: Dojo.Fx.AutoCreateOptions | Dojo.Fx.CreateOptions): dojo.NodeList;
		wrap(html: string | HTMLElement): dojo.NodeList;
		wrapAll(html: string | HTMLElement): dojo.NodeList;
		wrapInner(html: string | HTMLElement): dojo.NodeList;
	}
}
declare module "dojo/NodeList"
{
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare function require(module: "dojo/NodeList"): dojo.NodeList;

// dojo/NodeList-???

declare module "dojo/NodeList-data" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare function require(module: "dojo/NodeList-data"): dojo.NodeList;
declare module "dojo/NodeList-dom" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare function require(module: "dojo/NodeList-dom"): dojo.NodeList;
declare module "dojo/NodeList-fx" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare function require(module: "dojo/NodeList-fx"): dojo.NodeList;
declare module "dojo/NodeList-html" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare function require(module: "dojo/NodeList-html"): dojo.NodeList;
declare module "dojo/NodeList-manipulate" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare function require(module: "dojo/NodeList-manipulate"): dojo.NodeList;
declare module "dojo/NodeList-traverse" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare function require(module: "dojo/NodeList-traverse"): dojo.NodeList;

// dojo/number

declare module Dojo
{
	interface Number
	{
		format(value: number, options?: {
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
declare function require(module: "dojo/number"): Dojo.Number;

// dojo/on

declare module Dojo
{
	interface On
	{
		(target: HTMLElement, type: "abort", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "afterprint", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "beforeprint", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "beforeunload", listener: EventListener<BeforeUnloadEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "blur", listener: EventListener<FocusEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "canplay", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "canplaythrough", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "change", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "click", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "contextmenu", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dblclick", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "drag", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragend", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragenter", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragleave", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragover", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragstart", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "drop", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "durationchange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "emptied", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "ended", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "focus", listener: EventListener<FocusEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "hashchange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "input", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "keydown", listener: EventListener<KeyboardEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "keypress", listener: EventListener<KeyboardEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "keyup", listener: EventListener<KeyboardEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "load", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "loadeddata", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "loadedmetadata", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "loadstart", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "message", listener: EventListener<MessageEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mousedown", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mousemove", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mouseout", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mouseover", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mouseup", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mousewheel", listener: EventListener<MouseWheelEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "offline", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "online", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "pause", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "play", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "playing", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "progress", listener: (ev: any) => void, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "ratechange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "readystatechange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "reset", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "resize", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "scroll", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "seeked", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "seeking", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "select", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "stalled", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "storage", listener: EventListener<StorageEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "submit", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "suspend", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "timeupdate", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "unload", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "volumechange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "waiting", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: string, listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: Object, type: string, listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: Dojo.ExtensionEvent, listener: Dojo.Action, dontFix?: boolean): Dojo.RemovableHandle;
		(target: Object, type: Dojo.ExtensionEvent, listener: Dojo.Action, dontFix?: boolean): Dojo.RemovableHandle;

		emit(target: Object, type: string | Dojo.ExtensionEvent, event: { bubbles?: boolean; cancelable?: boolean; }): void;
		selector(cssSelector: string, event: string | Dojo.ExtensionEvent, children?: boolean): Dojo.ExtensionEvent;

		pausable(target: HTMLElement, type: "abort", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "afterprint", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "beforeprint", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "beforeunload", listener: EventListener<BeforeUnloadEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "blur", listener: EventListener<FocusEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "canplay", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "canplaythrough", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "change", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "click", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "contextmenu", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dblclick", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "drag", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragend", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragenter", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragleave", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragover", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragstart", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "drop", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "durationchange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "emptied", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "ended", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "focus", listener: EventListener<FocusEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "hashchange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "input", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "keydown", listener: EventListener<KeyboardEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "keypress", listener: EventListener<KeyboardEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "keyup", listener: EventListener<KeyboardEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "load", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "loadeddata", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "loadedmetadata", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "loadstart", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "message", listener: EventListener<MessageEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mousedown", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mousemove", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mouseout", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mouseover", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mouseup", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mousewheel", listener: EventListener<MouseWheelEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "offline", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "online", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "pause", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "play", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "playing", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "progress", listener: (ev: any) => void, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "ratechange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "readystatechange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "reset", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "resize", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "scroll", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "seeked", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "seeking", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "select", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "stalled", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "storage", listener: EventListener<StorageEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "submit", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "suspend", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "timeupdate", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "unload", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "volumechange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "waiting", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: string, listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement | Object, type: string | Dojo.ExtensionEvent, listener: Dojo.Action, dontFix?: boolean): Dojo.PausableHandle;

		once(target: HTMLElement, type: "afterprint", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "beforeprint", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "beforeunload", listener: EventListener<BeforeUnloadEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "blur", listener: EventListener<FocusEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "canplay", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "canplaythrough", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "change", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "click", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "contextmenu", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dblclick", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "drag", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragend", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragenter", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragleave", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragover", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragstart", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "drop", listener: EventListener<DragEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "durationchange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "emptied", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "ended", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "focus", listener: EventListener<FocusEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "hashchange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "input", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "keydown", listener: EventListener<KeyboardEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "keypress", listener: EventListener<KeyboardEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "keyup", listener: EventListener<KeyboardEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "load", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "loadeddata", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "loadedmetadata", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "loadstart", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "message", listener: EventListener<MessageEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mousedown", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mousemove", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mouseout", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mouseover", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mouseup", listener: EventListener<MouseEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mousewheel", listener: EventListener<MouseWheelEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "offline", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "online", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "pause", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "play", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "playing", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "progress", listener: (ev: any) => void, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "ratechange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "readystatechange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "reset", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "resize", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "scroll", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "seeked", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "seeking", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "select", listener: EventListener<UIEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "stalled", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "storage", listener: EventListener<StorageEvent>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "submit", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "suspend", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "timeupdate", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "unload", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "volumechange", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "waiting", listener: EventListener<Event>, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: string, listener: EventListener<Event>, dontFix?: boolean): void;
		once(target: HTMLElement | Object, type: string | Dojo.ExtensionEvent, listener: Dojo.Action, dontFix?: boolean): void;
	}
}
declare module "dojo/on"
{
	var on: Dojo.On;
	export = on;
}
declare function require(module: "dojo/on"): Dojo.On;

// dojo/parser

interface _ArrayOrPromise<T> extends Array<T>, Dojo.PromiseLike<T> { }

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
		parse(rootNode?: HTMLElement, options?: _ParseOptions): _ArrayOrPromise<dijit._WidgetBase>;
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
declare function require(module: "dojo/parser"): Dojo.Parser;

// dojo/promise/Promise

declare module "dojo/promise/Promise"
{
	var Promise: typeof dojo.Promise;
	export = Promise;
}
declare function require<T>(module: "dojo/promise/promise"): dojo.Promise<T>;

// dojo/promise/all

declare module Dojo
{
	module Promise
	{
		interface All
		{
			<T>(promises: T[] | dojo.Promise<T>[]): dojo.Promise<T[]>;
			<T>(promises: Dojo.Dictionary<dojo.Promise<T>>): dojo.Promise<Dojo.Dictionary<T>>;
			<T>(promises: T): dojo.Promise<T>;
		}
	}
}
declare module "dojo/promise/all"
{
	var all: Dojo.Promise.All;
	export = all;
}
declare function require(module: "dojo/promise/all"): Dojo.Promise.All;

// dojo/promise/first

declare module Dojo
{
	module Promise
	{
		interface First
		{
			<T>(promises: T[] | dojo.Promise<T>[] | Dojo.Dictionary<dojo.Promise<T>>): dojo.Promise<T>;
			<T>(promises: T): dojo.Promise<T>;
		}
	}
}
declare module "dojo/promise/first"
{
	var first: Dojo.Promise.First;
	export = first;
}
declare function require(module: "dojo/promise/first"): Dojo.Promise.First;

// dojo/query

declare module Dojo
{
	interface Query
	{
		(selector: string, context?: string | Object): dojo.NodeList;
		NodeList: dojo.NodeList;
	}
}
declare module "dojo/query"
{
	var query: Dojo.Query;
	export = query;
}
declare function require(module: "dojo/query"): Dojo.Query;
declare module "dojo/query!css2"
{
	var query: Dojo.Query;
	export = query;
}
declare function require(module: "dojo/query!css2"): Dojo.Query;
declare module "dojo/query!lite"
{
	var query: Dojo.Query;
	export = query;
}
declare function require(module: "dojo/query!lite"): Dojo.Query;
declare module "dojo/query!css2.1"
{
	var query: Dojo.Query;
	export = query;
}
declare function require(module: "dojo/query!css2.1"): Dojo.Query;
declare module "dojo/query!css3"
{
	var query: Dojo.Query;
	export = query;
}
declare function require(module: "dojo/query!css3"): Dojo.Query;
declare module "dojo/query!acme"
{
	var query: Dojo.Query;
	export = query;
}
declare function require(module: "dojo/query!acme"): Dojo.Query;

// dojo/regexp

declare module Dojo
{
	interface RegExp
	{
		buildGroupRE(arr: any | any[], re: (item: any) => RegExp, nonCapture?: boolean): RegExp;
		escapeString(str: string, except?: string): string;
		group(expression: string, nonCapture?: boolean): string;
	}
}
declare module "dojo/regexp"
{
	var regexp: Dojo.RegExp;
	export = regexp;
}
declare function require(module: "dojo/regexp"): Dojo.RegExp;

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
			content?: Object;
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
declare function require(module: "dojo/request"): Dojo.Request.Base;

declare module Dojo
{
	module Request
	{
		module Xhr
		{
			interface Error { status: number; responseText: string; }
			interface BaseOptions extends Request.BaseOptions { }
			interface Options extends BaseOptions, MethodOptions { }

			interface Base
			{
				<T>(url: string, options?: Options): dojo._PromiseBase<T, Error>;
				get<T>(url: string, options?: BaseOptions): dojo._PromiseBase<T, Error>;
				put<T>(url: string, options?: BaseOptions): dojo._PromiseBase<T, Error>;
				post<T>(url: string, options?: BaseOptions): dojo._PromiseBase<T, Error>;
				del<T>(url: string, options?: BaseOptions): dojo._PromiseBase<T, Error>;
			}
		}
	}
}
declare module "dojo/request/xhr"
{
	var request: Dojo.Request.Xhr.Base;
	export = request;
}
declare function require(module: "dojo/request/xhr"): Dojo.Request.Xhr.Base;

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
declare function require(module: "dojo/request/node"): Dojo.Request.Node.Base;

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
declare function require(module: "dojo/request/iframe"): Dojo.Request.iFrame.Base;

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
declare function require(module: "dojo/request/script"): Dojo.Request.Script.Base;

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
declare function require(module: "dojo/request/handlers"): Dojo.Request.Handlers;

declare module Dojo
{
	module Request
	{
		interface Notify
		{
			notify(type?: "start", listener?: SimpleAction): RemovableHandle;
			notify(type?: "send", listener?: (response: any, cancel: () => void) => void): RemovableHandle;
			notify(type?: "load", listener?: (response: any) => void): RemovableHandle;
			notify(type?: "error", listener?: (error: any) => void): RemovableHandle;
			notify(type?: "done", listener?: (responseOrError: any) => void): RemovableHandle;
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
declare function require(module: "dojo/request/notify"): Dojo.Request.Notify;

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
			register<T>(url: string | RegExp | ((url: string, options: Options) => boolean), provider: RequestObject<T, BaseOptions, Options>, first?: boolean): RemovableHandle;
		}
	}
}
declare module "dojo/request/registry"
{
	var registry: Dojo.Request.Registry;
	export = registry;
}
declare function require(module: "dojo/request/registry"): Dojo.Request.Registry;

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
		register(route: string | RegExp, callback: EventListener<RouterEvent>): RemovableHandle;
		registerBefore(route: string | RegExp, callback: EventListener<RouterEvent>): RemovableHandle;
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
declare function require(module: "dojo/router"): Dojo.Router;

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
declare function require(module: "dojo/sniff"): Dojo.Sniff;

// dojo/text

declare module "dojo/text"
{
}
declare function require(module: "dojo/text"): void;

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
declare function require(module: "dojo/topic"): Dojo.Topic;

// dojo/Stateful

declare module "dojo/Stateful"
{
	var Stateful: typeof dojo.Stateful;
	export = Stateful;
}
declare function require(module: "dojo/Stateful"): dojo.Stateful;

// dojo/string

declare module Dojo
{
	interface String
	{
		pad(text: string, size: number, ch?: string, end?: boolean): string;
		rep(str: string, num: number): string;
		substitute(template: string, map: string[] | { [text: string]: string; }, transform?: (value: any, key: string) => string, thisObject?: Object): string;
		trim(str: string): string;
	}
}
declare module "dojo/string"
{
	var str: Dojo.String;
	export = str;
}
declare function require(module: "dojo/string"): Dojo.String;

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
declare function require(module: "dojo/touch"): Dojo.Touch;

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
declare function require(module: "dojo/uacss"): Dojo.Uacss;

// dojo/when

declare module Dojo
{
	interface When
	{
		<T>(value: T, callback?: (value: T) => any, errback?: (error: any) => void, progback?: (update: any) => void): void;
	}
}
declare module "dojo/when"
{
	var when: Dojo.When;
	export = when;
}
declare function require(module: "dojo/when"): Dojo.When;

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
declare function require(module: "dojo/window"): Dojo.Window;