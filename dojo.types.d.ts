/************************************************************************/
/* Define Dojo standard types                                           */
/************************************************************************/

// AMD definitions

declare function require<T>(depends: string): T;
declare function require<T>(depends: string[], callback: Dojo.FunctionReturning<T>): T;

declare function define<T>(id: string, depends: string[], callback: Dojo.FunctionReturning<T>): T;
declare function define<T>(depends: string[], callback: Dojo.FunctionReturning<T>): T;
declare function define(obj: Object);

// Classes that must reside at the root level because "export =" cannot handle namespaces

declare class _DojoPromise<T>
{
	constructor();

	always(callbackOrErrback?: (value: any) => void ): Dojo.Promise<T>;
	cancel(reason: any, strict?: boolean): any;
	isCanceled(): boolean;
	isFulfilled(): boolean;
	isRejected(): boolean;
	isResolved(): boolean;
	otherwise(errback?: (error: any) => void ): Dojo.Promise<T>;
	then<V>(callback?: (value: T) => V, errback?: (error: any) => void , progback?: (progress: any) => void ): Dojo.Promise<V>;
	trace(): Dojo.Promise<T>;
	traceRejected(): Dojo.Promise<T>;
}

// Define the Dojo namespace

declare module Dojo
{
	// Dojo handles

	interface Handle {}
	interface RemovableHandle extends Handle	{ remove(): void; }
	interface PausableHandle extends RemovableHandle
	{
		pause(): void;
		resume(): void;
	}

	// Common callback function types

	interface SimpleAction { (): void; }
	interface Action { (...args: any[]): void; }
	interface Predicate { (...args: any[]): boolean; }
	interface FunctionReturning<T> { (...args: any[]): T; }

	interface ExtensionEvent { (node: HTMLElement, listener: EventListener): RemovableHandle; }

	module Fx
	{
		interface EasingFunction { (value: number): number; }
	}

	// Dictionaries

	interface Dictionary<T>
	{
		[key: string]: T;
	}
	interface PropertiesMap
	{
		[property: string]: any;
	}
	interface AttributesMap
	{
		[attribute: string]: any;
	}
	interface StylesMap
	{
		[style: string]: string;
	}

	// Common structures

	interface Point
	{
		x: number;
		y: number;
	}
	interface Size
	{
		w: number;
		h: number;
	}
	interface Offset
	{
		l: number;
		t: number;
	}
	interface Rectangle extends Point, Size {}
	interface Position extends Offset, Size {}
	interface Box extends Position
	{
		r: number;
		b: number;
	}

	// Evented

	class Evented
	{
		emit(type: string, event: { bubbles?: boolean; cancelable?: boolean; }): void;
		emit(type: Dojo.ExtensionEvent, event: { bubbles?: boolean; cancelable?: boolean; }): void;

		on(type: string, listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "abort", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "afterprint", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "beforeprint", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean): Dojo.RemovableHandle;
		on(type: "blur", listener: (ev: FocusEvent) => boolean): Dojo.RemovableHandle;
		on(type: "canplay", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "canplaythrough", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "change", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "click", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "contextmenu", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dblclick", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "drag", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragend", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragenter", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragleave", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragover", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragstart", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "drop", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "durationchange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "emptied", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "ended", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "focus", listener: (ev: FocusEvent) => boolean): Dojo.RemovableHandle;
		on(type: "hashchange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "input", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "keydown", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
		on(type: "keypress", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
		on(type: "keyup", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
		on(type: "load", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "loadeddata", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "loadedmetadata", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "loadstart", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "message", listener: (ev: MessageEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mousedown", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mousemove", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mouseout", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mouseover", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mouseup", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean): Dojo.RemovableHandle;
		on(type: "offline", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "online", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "pause", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "play", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "playing", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "progress", listener: (ev: any) => boolean): Dojo.RemovableHandle;
		on(type: "ratechange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "readystatechange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "reset", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "resize", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "scroll", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "seeked", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "seeking", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "select", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "stalled", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "storage", listener: (ev: StorageEvent) => boolean): Dojo.RemovableHandle;
		on(type: "submit", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "suspend", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "timeupdate", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "unload", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "volumechange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "waiting", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: Dojo.ExtensionEvent, listener: EventListener): Dojo.RemovableHandle;
	}
	
	// Stateful

	class Stateful
	{
		get (name: string): any;
		set (name: string, value: any): void;
		set (values: PropertiesMap): void;
		watch(name: string, callback: (prop: string, oldvalue: any, newvalue: any) => void ): { unwatch(): void; };
	}

	// Promise

	class Promise<T> extends _DojoPromise<T> { }

	// Animation

	class Animation extends Evented
	{
		constructor(args?: PropertiesMap);

		duration: number;
		curve: any;
		easing: Fx.EasingFunction;
		repeat: number;
		rate: number;
		delay: number;

		play(delay?: number, goToStart?: boolean): Animation;
		pause(): Animation;
		gotoPercent(percent: number, andPlay?: boolean): Animation;
		stop(goToEnd?:boolean): Animation;
		status(): string;
	}
}

// Widgets

declare module Dijit
{
	interface WidgetCreateOptions
	{
		id?: string;
		srcNodeRef?: HTMLElement;
		domNode?: HTMLElement;
		containerNode?: HTMLElement;

		class?: string;
		baseClass?: string;
		style?: Dojo.StylesMap;
		title?: string;
		lang?: string;
		dir?: string;
		focused?: boolean;
		ownerDocument?: HTMLDocument;
		postMixInProperties?: string;
		tooltip?: string;
	}

	class _Widget extends Dojo.Stateful
	{
		constructor(params?: WidgetCreateOptions, srcNodeRef?: HTMLElement);
		constructor(params?: WidgetCreateOptions, srcNodeRefId?: string);
	}
}
