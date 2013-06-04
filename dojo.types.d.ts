/************************************************************************/
/* Define Dojo standard types                                           */
/************************************************************************/

declare module Dojo
{
	// Dojo handles

	export interface Handle
	{
	}
	export interface RemovableHandle extends Handle
	{
		remove(): void;
	}
	export interface PausableHandle extends RemovableHandle
	{
		pause(): void;
		resume(): void;
	}

	// Common callback function types

	export interface BlankFunction { (): void; }
	export interface Action { (...args: any[]): void; }
	export interface FunctionReturning<T> { (...args: any[]): T; }

	export interface ExtensionEvent { (node: HTMLElement, listener: EventListener): RemovableHandle; }
}

// AMD definitions

declare function require<T>(depends: string): T;
declare function require<T>(depends: string[], callback: Dojo.FunctionReturning<T>): T;

declare function define<T>(id: string, depends: string[], callback: Dojo.FunctionReturning<T>): T;
declare function define<T>(depends: string[], callback: Dojo.FunctionReturning<T>): T;
declare function define(obj: Object);
