/************************************************************************/
/* Define core Dojo features                                            */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

// dojo/ready

declare module Dojo {
	interface Ready {
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

declare module Dojo {
	interface DomReady {
		(callback: SimpleAction): void;
	}
}
declare module "dojo/domReady"
{
	var domReady: Dojo.DomReady;
	export = domReady;
}

// dojo/_base/array

declare module Dojo {
	interface Array {
		indexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;
		lastIndexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;

		forEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => void, thisObject?: Object): void;
		forEach<T>(array: T[], callback: string, thisObject?: Object): void;
		forEach<T>(array: string, callback: (item: string, index: number, array: string) => void, thisObject?: Object): void;
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

declare module Dojo {
	class Color {
		constructor();
		constructor(colors: any[]);
		constructor(color: string);
		constructor(color: Object);

		a: number;
		r: number;
		g: number;
		b: number;
	}

	module Color {
		interface NamedColors {
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
	class color extends Dojo.Color { }

	module color {
		var named: Dojo.Color.NamedColors;
	}

	export = color;
}

// dojo/_base/config

declare module Dojo {
	interface Config {
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

declare module Dojo {
	module Fx {
		interface BaseCreateOptions {
			node: any;
			duration?: number;
			easing?: EasingFunction;
		}
		interface CreateOptions extends BaseCreateOptions {
			properties: StylesMap;
		}
		interface Base {
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

declare module Dojo {
	interface Lang {
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
	class DojoAdapterRegistry {
		constructor(returnWrappers?: boolean);

		pairs: any[];
		returnWrappers: boolean;

		match(...args: any[]): void;
		register(name: string, check: Dojo.FunctionReturning<boolean>, wrap: Dojo.Action, directReturn?: boolean, override?: boolean): void;
		unregister(name: string): boolean;
	}

	export = DojoAdapterRegistry;
}

// dojo/aspect

declare module Dojo {
	interface Aspect {
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

declare module Dojo {
	interface HistoryState {
		back?: (direction: string) => void;
		forward?: (direction: string) => void;
		changeUrl?: any;
	}

	interface Back {
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

declare module Dojo {
	interface Cache {
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

declare module Dojo {
	module Cldr {
		interface Monetary {
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

declare module Dojo {
	module Cldr {
		interface Supplemental {
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

declare module Dojo {
	interface Cookie {
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

declare module Dojo {
	interface _CurrencyFormatOptions {
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
	interface Currency {
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

declare module Dojo {
	module Date {
		interface Base {
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

declare module Dojo {
	module Date {
		interface Stamp {
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

declare module Dojo {
	module Date {
		interface FormatOptions {
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

		interface Locale {
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

declare module dojo {
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

		then<V>(callback?: (value: T) => Deferred<V>, errback?: (error: any) => void, progback?: (progress: any) => void): Promise<V>;
		then<V>(callback?: (value: T) => Promise<V>, errback?: (error: any) => void, progback?: (progress: any) => void): Promise<V>;
		then<V>(callback?: (value: T) => V, errback?: (error: any) => void, progback?: (progress: any) => void): Promise<V>;
	}
}
declare module "dojo/Deferred"
{
	var Deferred: typeof dojo.Deferred;
	export = Deferred;
}

// dojo/dom

declare module Dojo {
	interface Dom {
		byId<T extends HTMLElement>(node: T): T;
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

declare module Dojo {
	interface DomAttr {
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

declare module Dojo {
	interface DomClass {
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

declare module Dojo {
	interface DomConstruct {
		toDom(frag: string, doc?: HTMLDocument): HTMLElement;

		place(id: string, refNodeId: string, pos?: string): HTMLElement;
		place<T extends HTMLElement>(node: T, refNodeId: string, pos?: string): T;
		place(id: string, refNode: HTMLElement, pos?: string): HTMLElement;
		place<T extends HTMLElement>(node: T, refNode: HTMLElement, pos?: string): T;
		place(id: string, refNodeId: string, pos?: number): HTMLElement;
		place<T extends HTMLElement>(node: T, refNodeId: string, pos?: number): T;
		place(id: string, refNode: HTMLElement, pos?: number): HTMLElement;
		place<T extends HTMLElement>(node: T, refNode: HTMLElement, pos?: number): T;

		create(id: "a", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLAnchorElement
		create(id: "abbr", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "address", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "area", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLAreaElement
		create(id: "article", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "aside", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "audio", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLAudioElement
		create(id: "b", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "base", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLBaseElement
		create(id: "bdi", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "bdo", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "blockquote", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLQuoteElement
		create(id: "body", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLBodyElement
		create(id: "br", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLBRElement
		create(id: "button", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLButtonElement
		create(id: "canvas", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLCanvasElement
		create(id: "caption", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableCaptionElement
		create(id: "cite", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "code", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "col", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableColElement
		create(id: "colgroup", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableColElement
		create(id: "datalist", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLDataListElement
		create(id: "dd", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "del", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLModElement
		create(id: "dfn", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "div", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLDivElement
		create(id: "dl", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLDListElement
		create(id: "dt", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "em", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "embed", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLEmbedElement
		create(id: "fieldset", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLFieldSetElement
		create(id: "figcaption", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "figure", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "footer", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "form", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLFormElement
		create(id: "h1", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLHeadingElement
		create(id: "h2", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLHeadingElement
		create(id: "h3", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLHeadingElement
		create(id: "h4", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLHeadingElement
		create(id: "h5", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLHeadingElement
		create(id: "h6", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLHeadingElement
		create(id: "head", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLHeadElement
		create(id: "header", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "hgroup", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "hr", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLHRElement
		create(id: "html", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLHtmlElement
		create(id: "i", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "iframe", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLIFrameElement
		create(id: "img", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLImageElement
		create(id: "input", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLInputElement
		create(id: "ins", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLModElement
		create(id: "kbd", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "label", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLLabelElement
		create(id: "legend", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLLegendElement
		create(id: "li", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLLIElement
		create(id: "link", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLLinkElement
		create(id: "main", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "map", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLMapElement
		create(id: "mark", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "menu", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLMenuElement
		create(id: "meta", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLMetaElement
		create(id: "nav", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "noscript", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "object", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLObjectElement
		create(id: "ol", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLOListElement
		create(id: "optgroup", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLOptGroupElement
		create(id: "option", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLOptionElement
		create(id: "p", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLParagraphElement
		create(id: "param", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLParamElement
		create(id: "pre", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLPreElement
		create(id: "progress", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLProgressElement
		create(id: "q", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLQuoteElement
		create(id: "rp", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "rt", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "ruby", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "s", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "samp", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "script", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLScriptElement
		create(id: "section", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "select", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLSelectElement
		create(id: "small", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "source", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLSourceElement
		create(id: "span", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLSpanElement
		create(id: "strong", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "style", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLStyleElement
		create(id: "sub", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "summary", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "sup", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "table", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableElement
		create(id: "tbody", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableSectionElement
		create(id: "td", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableDataCellElement
		create(id: "textarea", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTextAreaElement
		create(id: "tfoot", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableSectionElement
		create(id: "th", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableHeaderCellElement
		create(id: "thead", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableSectionElement
		create(id: "title", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTitleElement
		create(id: "tr", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTableRowElement
		create(id: "track", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLTrackElement
		create(id: "u", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "ul", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLUListElement
		create(id: "var", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: "video", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLVideoElement
		create(id: "wbr", attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement
		create(id: string, attrs?: AttributesMap, refNodeId?: string, pos?: string): HTMLElement;

		create(id: "a", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLAnchorElement
		create(id: "abbr", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "address", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "area", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLAreaElement
		create(id: "article", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "aside", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "audio", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLAudioElement
		create(id: "b", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "base", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLBaseElement
		create(id: "bdi", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "bdo", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "blockquote", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLQuoteElement
		create(id: "body", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLBodyElement
		create(id: "br", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLBRElement
		create(id: "button", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLButtonElement
		create(id: "canvas", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLCanvasElement
		create(id: "caption", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableCaptionElement
		create(id: "cite", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "code", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "col", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableColElement
		create(id: "colgroup", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableColElement
		create(id: "datalist", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLDataListElement
		create(id: "dd", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "del", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLModElement
		create(id: "dfn", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "div", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLDivElement
		create(id: "dl", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLDListElement
		create(id: "dt", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "em", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "embed", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLEmbedElement
		create(id: "fieldset", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLFieldSetElement
		create(id: "figcaption", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "figure", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "footer", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "form", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLFormElement
		create(id: "h1", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h2", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h3", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h4", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h5", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "h6", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLHeadingElement
		create(id: "head", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLHeadElement
		create(id: "header", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "hgroup", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "hr", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLHRElement
		create(id: "html", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLHtmlElement
		create(id: "i", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "iframe", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLIFrameElement
		create(id: "img", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLImageElement
		create(id: "input", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLInputElement
		create(id: "ins", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLModElement
		create(id: "kbd", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "label", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLLabelElement
		create(id: "legend", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLLegendElement
		create(id: "li", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLLIElement
		create(id: "link", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLLinkElement
		create(id: "main", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "map", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLMapElement
		create(id: "mark", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "menu", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLMenuElement
		create(id: "meta", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLMetaElement
		create(id: "nav", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "noscript", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "object", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLObjectElement
		create(id: "ol", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLOListElement
		create(id: "optgroup", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLOptGroupElement
		create(id: "option", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLOptionElement
		create(id: "p", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLParagraphElement
		create(id: "param", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLParamElement
		create(id: "pre", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLPreElement
		create(id: "progress", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLProgressElement
		create(id: "q", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLQuoteElement
		create(id: "rp", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "rt", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "ruby", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "s", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "samp", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "script", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLScriptElement
		create(id: "section", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "select", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLSelectElement
		create(id: "small", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "source", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLSourceElement
		create(id: "span", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLSpanElement
		create(id: "strong", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "style", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLStyleElement
		create(id: "sub", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "summary", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "sup", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "table", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableElement
		create(id: "tbody", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableSectionElement
		create(id: "td", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableDataCellElement
		create(id: "textarea", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTextAreaElement
		create(id: "tfoot", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableSectionElement
		create(id: "th", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableHeaderCellElement
		create(id: "thead", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableSectionElement
		create(id: "title", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTitleElement
		create(id: "tr", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTableRowElement
		create(id: "track", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLTrackElement
		create(id: "u", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "ul", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLUListElement
		create(id: "var", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: "video", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLVideoElement
		create(id: "wbr", attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement
		create(id: string, attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement;

		create<T extends HTMLElement>(tag: T, attrs?: AttributesMap, refNodeId?: string, pos?: string): T;
		create<T extends HTMLElement>(tag: T, attrs?: AttributesMap, refNode?: HTMLElement, pos?: string): T;

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

declare module Dojo {
	interface DomForm {
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

declare module Dojo {
	interface DomGeometry {
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

declare module Dojo {
	interface DomProp {
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

declare module Dojo {
	interface DomStyle {
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

declare module Dojo {
	module Fx {
		interface SlideCreateOptions extends CreateOptions {
			top: string;
			left: string;
		}
		interface AutoSlideCreateOptions extends SlideCreateOptions {
			auto: any;
		}

		interface Module {
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

declare module Dojo {
	module Fx {
		interface Easing {
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

declare module Dojo {
	module Fx {
		interface TogglerCreateOptions {
			node: any;
			showDuration?: number;
			showFunc?: (args: BaseCreateOptions) => dojo.Animation;
			hideDuration?: number;
			hideFuc?: (args: BaseCreateOptions) => dojo.Animation;
		}

		class Toggler {
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

// dojo/has

declare module Dojo {
	interface Has {
		(feature: string): boolean;
		(feature: number): boolean;

		add(feature: string, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
		add(feature: number, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
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

// dojo/hash

declare module Dojo {
	interface Hash {
		(hash?: string, replace?: boolean): string;
	}
}
declare module "dojo/hash"
{
	var hash: Dojo.Hash;
	export = hash;
}

// dojo/html

declare module Dojo {
	interface _HtmlContentSetterOptions {
		cleanContent?: boolean;
		extractContent?: boolean;
		parseContent?: boolean;
		parserScope?: string;
		startup?: boolean;

		onBegin(): void;
		onContentError(err: any): string;
		onEnd(): void;
	}

	interface Html {
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

declare module Dojo {
	interface IOQuery {
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

declare module Dojo {
	interface Keys {
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

declare module Dojo {
	interface Json {
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

declare module Dojo {
	interface Mouse {
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

declare module Dojo {
	module Fx {
		interface AutoCreateOptions extends CreateOptions {
			auto: any;
		}
		interface AutoBaseCreateOptions extends BaseCreateOptions {
			auto: any;
		}
	}
}
declare module dojo {
	class NodeList {
		constructor(node: HTMLElement);
		constructor(nodes: HTMLElement[]);
		constructor(nodes: _HTMLNodeList);
		constructor(nodes: dojo.NodeList);

		// Make NodeList array-like
		length: number;
		[index: number]: HTMLElement;

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

		fadeIn(args?: Dojo.Fx.AutoBaseCreateOptions): dojo.NodeList;
		fadeIn(args?: Dojo.Fx.BaseCreateOptions): Animation;

		fadeOut(args?: Dojo.Fx.AutoBaseCreateOptions): dojo.NodeList;
		fadeOut(args?: Dojo.Fx.BaseCreateOptions): Animation;

		filter(filter: string): dojo.NodeList;
		filter(filter: (item: HTMLElement, index: number, list: dojo.NodeList) => boolean): dojo.NodeList;

		first(): dojo.NodeList;
		forEach(callback: (item: HTMLElement, index: number, list: dojo.NodeList) => void, thisObject?: Object): dojo.NodeList;

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
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}

// dojo/NodeList-???

declare module "dojo/NodeList-data" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-dom" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-fx" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-html" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-manipulate" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-traverse" {
	var NodeList: typeof dojo.NodeList;
	export = NodeList;
}

// dojo/number

declare module Dojo {
	interface Number {
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

// dojo/on

declare module Dojo {
	interface On {
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

		emit(target: Object, type: string, event: { bubbles?: boolean; cancelable?: boolean; }): void;
		emit(target: Object, type: Dojo.ExtensionEvent, event: { bubbles?: boolean; cancelable?: boolean; }): void;

		selector(cssSelector: string, event: string, children?: boolean): Dojo.ExtensionEvent;
		selector(cssSelector: string, event: Dojo.ExtensionEvent, children?: boolean): Dojo.ExtensionEvent;

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
		pausable(target: Object, type: string, listener: EventListener<Event>, dontFix?: boolean): Dojo.PausableHandle;
		pausable(target: HTMLElement, type: Dojo.ExtensionEvent, listener: Dojo.Action, dontFix?: boolean): Dojo.PausableHandle;
		pausable(target: Object, type: Dojo.ExtensionEvent, listener: Dojo.Action, dontFix?: boolean): Dojo.PausableHandle;

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
		once(target: Object, type: string, listener: EventListener<Event>, dontFix?: boolean): void;
		once(target: HTMLElement, type: Dojo.ExtensionEvent, listener: Dojo.Action, dontFix?: boolean): void;
		once(target: Object, type: Dojo.ExtensionEvent, listener: Dojo.Action, dontFix?: boolean): void;
	}
}
declare module "dojo/on"
{
	var on: Dojo.On;
	export = on;
}

// dojo/parser

interface _ArrayOrPromise<T> extends Array<T>, Dojo.PromiseLike<T> { }

declare module Dojo {
	interface _ParseOptions {
		noStart?: boolean;
		rootNode?: HTMLElement;
		template?: boolean;
		inherited?: Object;
		scope?: string;
		propsThis?: Object;
		contextRequire?: Function;
	}

	interface Parser {
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

// dojo/promise/Promise

declare module "dojo/promise/Promise"
{
	var Promise: typeof dojo.Promise;
	export = Promise;
}

// dojo/promise/all

declare module Dojo {
	module Promise {
		interface All {
			<T>(promises: dojo.Promise<T>[]): dojo.Promise<T[]>;
			<T>(promises: T[]): dojo.Promise<T[]>;
			<T>(promises: Dojo.Dictionary<dojo.Promise<T>>): dojo.Promise<Dojo.Dictionary<T>>;
			(promises: Object): dojo.Promise<Object>;
			(promises: any): dojo.Promise<any>;
		}
	}
}
declare module "dojo/promise/all"
{
	var all: Dojo.Promise.All;
	export = all;
}

// dojo/promise/first

declare module Dojo {
	module Promise {
		interface First {
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

declare module Dojo {
	interface Query {
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

declare module Dojo {
	interface RegExp {
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

declare module Dojo {
	module Request {
		interface MethodOptions {
			method: string;
		}
		interface BaseOptions {
			handleAs?: string;
			headers?: { [header: string]: string; };
			sync?: boolean;
			data?: any;
			query?: any;
			timeout?: number;
			preventCache?: boolean;
		}
		interface Options extends BaseOptions, MethodOptions { }

		interface RequestObject<T, BaseOptions, Options> {
			<T>(url: string, options?: Options): dojo.Promise<T>;
			get<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			put<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			post<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			del<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
		}
	}
}

declare module Dojo {
	module Request {
		interface Base {
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

declare module Dojo {
	module Request {
		module Xhr {
			interface BaseOptions extends Request.BaseOptions { }
			interface Options extends BaseOptions, MethodOptions { }

			interface Base {
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

declare module Dojo {
	module Request {
		module Node {
			interface BaseOptions extends Request.BaseOptions {
				user: string;
				password: string;
			}
			interface Options extends BaseOptions, MethodOptions { }

			interface Base {
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

declare module Dojo {
	module Request {
		module iFrame {
			interface BaseOptions extends Request.BaseOptions {
				form?: HTMLElement;
			}
			interface Options extends BaseOptions, MethodOptions { }

			interface Base {
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

declare module Dojo {
	module Request {
		module Script {
			interface BaseOptions extends Request.BaseOptions {
				frameDoc?: HTMLDocument;
				jsonp?: string;
				checkString?: string;
			}
			interface Options extends BaseOptions, MethodOptions { }

			interface Base {
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

declare module Dojo {
	module Request {
		interface Handlers {
			register(name: string, handler: (response: any) => any): void;
		}
	}
}
declare module "dojo/request/handlers"
{
	var handlers: Dojo.Request.Handlers;
	export = handlers;
}

declare module Dojo {
	module Request {
		interface Notify {
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

declare module Dojo {
	module Request {
		interface Registry {
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

declare module Dojo {
	interface RouterEvent {
		params: Dojo.Dictionary<string>;
		oldPath: string;
		newPath: string;
		preventDefault: Dojo.SimpleAction;
		stopImmediatePropagation: Dojo.SimpleAction;
	}
	interface Router {
		register(route: string, callback: EventListener<RouterEvent>): RemovableHandle;
		register(route: RegExp, callback: EventListener<RouterEvent>): RemovableHandle;

		registerBefore(route: string, callback: EventListener<RouterEvent>): RemovableHandle;
		registerBefore(route: RegExp, callback: EventListener<RouterEvent>): RemovableHandle;

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

declare module Dojo {
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

declare module Dojo {
	interface Topic {
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
	var Stateful: typeof dojo.Stateful;
	export = Stateful;
}

// dojo/string

declare module Dojo {
	interface String {
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

declare module Dojo {
	interface Touch {
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

declare module Dojo {
	interface Uacss extends Has { }
}
declare module "dojo/uacss"
{
	var uacss: Dojo.Uacss;
	export = uacss;
}

// dojo/when

declare module Dojo {
	interface When {
		<T>(value: T): dojo.Promise<T>;
		<T, V>(value: T, callback: (value: T) => V, errback?: (error: any) => void, progback?: (update: any) => void): V;
		<T>(promise: dojo.Promise<T>): dojo.Promise<T>;
		<T, V>(promise: dojo.Promise<T>, callback: (value: T) => V, errback?: (error: any) => void, progback?: (update: any) => void): dojo.Promise<V>;
	}
}
declare module "dojo/when"
{
	var when: Dojo.When;
	export = when;
}

// dojo/window

declare module Dojo {
	interface Window {
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