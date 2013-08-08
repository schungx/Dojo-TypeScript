/************************************************************************/
/* Define Dojo standard types                                           */
/************************************************************************/

// AMD definitions

declare function require<T>(depends: string): T;
declare function require<T>(depends: string[], callback: Dojo.FunctionReturning<T>): T;

declare function define<T>(id: string, depends: string[], callback: Dojo.FunctionReturning<T>): T;
declare function define<T>(depends: string[], callback: Dojo.FunctionReturning<T>): T;
declare function define(obj: Object);

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
	interface WatchHandle { unwatch(): void; }

	// Common callback function types

	interface SimpleAction { (): void; }
	interface Action { (...args: any[]): void; }
	interface Predicate { (...args: any[]): boolean; }
	interface FunctionReturning<T> { (...args: any[]): T; }

	interface ExtensionEvent { (node: HTMLElement, listener: EventListener): RemovableHandle; }
	interface WatchCallback<T> { (prop: string, oldvalue: T, newvalue: T): void; }

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

	// Declare

	interface Declare
	{
		(className: string, superclass: DeclaredClass, props: DeclareOptions): DeclaredClass;
		(className: string, superclasses: DeclaredClass[], props: DeclareOptions): DeclaredClass;
		(superclass: DeclaredClass, props: DeclareOptions): DeclaredClass;
		(superclasses: DeclaredClass[], props: DeclareOptions): DeclaredClass;

		safeMixin(dest: dijit._WidgetBase, ...sources: PropertiesMap[]): void;
	}

	interface DeclareOptions
	{
		"constructor"?: Action;
		destroy?: SimpleAction;
	}

	class DeclaredClass
	{
		constructor(...v_args: any[]);

		inherited(args: IArguments): void;
		inherited(args: any[]): void;
		inherited(...args: any[]): void;

		destroy(): void;
	}
}

declare module dojo
{
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

	class Stateful extends Dojo.DeclaredClass
	{
		get(name: string): any;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;
		set(values: Dojo.PropertiesMap): void;
		watch<T>(name: string, callback: Dojo.WatchCallback<T>): Dojo.WatchHandle;
		_changeAttrValue(name: string, value: any): void;		// Helper functions are not flushed out with overload-by-constant
	}

	// Promise

	class Promise<T>
	{
		constructor();

		always(callbackOrErrback?: (value: any) => void ): Promise<T>;
		cancel(reason: any, strict?: boolean): void;
		otherwise(errback?: (error: any) => void ): Promise<T>;

		isCanceled(): boolean;
		isFulfilled(): boolean;
		isRejected(): boolean;
		isResolved(): boolean;

		then<V>(callback?: (value: T) => Promise<V>, errback?: (error: any) => void , progback?: (progress: any) => void ): Promise<V>;
		then<V>(callback?: (value: T) => V, errback?: (error: any) => void , progback?: (progress: any) => void ): Promise<V>;

		trace(): Promise<T>;
		traceRejected(): Promise<T>;
	}

	// Animation

	class Animation extends Evented
	{
		constructor(args?: Dojo.PropertiesMap);
		
		duration: number;
		curve: any;
		easing: Dojo.Fx.EasingFunction;
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

// These modules are useful in dijit, so define them here

// dojo/_base/declare

declare module "dojo/_base/declare" 
{
	var declare: Dojo.Declare;

	export = declare;
}


// Widgets

declare module Dijit
{
	interface WidgetCreateOptions extends Dojo.DeclareOptions
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

	interface WidgetOrMixin { }
}

declare module dijit
{
	class _WidgetBase extends dojo.Stateful implements Dojo.DeclaredClass, Dijit.WidgetOrMixin
	{
		constructor(params?: Dijit.WidgetCreateOptions, srcNodeRef?: HTMLElement);
		constructor(params?: Dijit.WidgetCreateOptions, srcNodeRefId?: string);

		id: string;
		baseClass: string;
		class: string;
		containerNode: HTMLElement;
		srcNodeRef: HTMLElement;
		domNode: HTMLElement;
		ownerDocument: HTMLDocument;
		dir: string;
		lang: string;

		private focused: boolean;
		private postMixInProperties: string;
		private style: Dojo.StylesMap;
		private title: string;
		private tooltip: string;

		get(name: "baseClass"): string;
		get(name: "class"): string;
		get(name: "containerNode"): HTMLElement;
		get(name: "dir"): string;
		get(name: "domNode"): HTMLElement;
		get(name: "focused"): boolean;
		get(name: "id"): string;
		get(name: "lang"): string;
		get(name: "ownerDocument"): HTMLDocument;
		get(name: "postMixInProperties"): string;
		get(name: "srcNodeRef"): HTMLElement;
		get(name: "style"): Dojo.StylesMap;
		get(name: "title"): string;
		get(name: "tooltip"): string;
		get(name: string): any;

		set(name: "baseClass", value: string): void;
		set(name: "class", value: string): void;
		set(name: "containerNode", value: HTMLElement): void;
		set(name: "dir", value: string): void;
		set(name: "domNode", value: HTMLElement): void;
		set(name: "focused", value: boolean): void;
		set(name: "id", value: string): void;
		set(name: "lang", value: string): void;
		set(name: "ownerDocument", value: HTMLDocument): void;
		set(name: "postMixInProperties", value: string): void;
		set(name: "srcNodeRef", value: HTMLElement): void;
		set(name: "style", value: Dojo.StylesMap): void;
		set(name: "title", value: string): void;
		set(name: "tooltip", value: string): void;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;
		set(values: Dojo.PropertiesMap): void;

		watch(prop: "baseClass", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "class", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "containerNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "dir", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "domNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "focused", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "id", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "lang", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "ownerDocument", callback: Dojo.WatchCallback<HTMLDocument>): Dojo.WatchHandle;
		watch(prop: "postMixInProperties", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "srcNodeRef", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "style", callback: Dojo.WatchCallback<Dojo.StylesMap>): Dojo.WatchHandle;
		watch(prop: "title", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "tooltip", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;


		buildRendering(): void;

		/* Deprecated
				connect(obj: Object, event: string, method: string): Dojo.Handle;
				connect(obj: Object, event: Dojo.ExtensionEvent, method: string): Dojo.Handle;
				connect(obj: Object, event: string, method: EventListener): Dojo.Handle;
				connect(obj: Object, event: Dojo.ExtensionEvent, method: EventListener): Dojo.Handle;

				disconnect(handle: Dojo.Handle): void;
		*/

		defer(fcn: Dojo.Action, delay: number): Dojo.RemovableHandle;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom?: boolean): void;
		destroyRecursive(preserveDom?: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		emit(type: string, eventObj: Object, callbackArgs?: any[]): void;

		getChildren(): _WidgetBase[];
		getParent(): _WidgetBase;

		inherited(args: IArguments): void;
		inherited(args: any[]): void;
		inherited(...args: any[]): void;

		isFocusable(): boolean;
		isLeftToRight(): boolean;
		isValid(): boolean;

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
		on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
		on(type: Dojo.ExtensionEvent, func: Dojo.Action): Dojo.RemovableHandle;

		own(handle: Dojo.RemovableHandle): Dojo.RemovableHandle[];

		placeAt(referenceId: string, position: string): _WidgetBase;
		placeAt(referenceNode: HTMLElement, position: string): _WidgetBase;
		placeAt(referenceWidget: _WidgetBase, position: string): _WidgetBase;
		placeAt(referenceId: string, position: number): _WidgetBase;
		placeAt(referenceNode: HTMLElement, position: number): _WidgetBase;
		placeAt(referenceWidget: _WidgetBase, position: number): _WidgetBase;

		postCreate(): void;
		startup(): void;
		toString(): string;

		/* Deprecated
				subscribe(topic: string, callback: Dojo.Action): Dojo.Handle;
				uninitialize(): boolean;
				unsubscribe(handle: Dojo.Handle): void;
		*/
	}
}
