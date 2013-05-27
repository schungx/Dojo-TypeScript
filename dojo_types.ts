/************************************************************************/
/* Define Dojo standard types                                           */
/************************************************************************/

// Dojo handles

interface GenericHandle
{
}
interface DojoHandle extends GenericHandle
{
	remove(): void;
}
interface DojoPausableHandle extends DojoHandle
{
	pause(): void;
	resume(): void;
}

// Common callback function types

interface GenericBlankFunction { (): void; }
interface GenericAction { (...args: any[]): void; }
interface GenericFunction { (...args: any[]): any; }
interface GenericFunctionReturning<T> { (...args: any[]): T; }

interface DojoExtensionEvent { (node: HTMLElement, listener: EventListener): DojoHandle; }

interface ArrayLoopCallback<T> { (item: T, index: number, array: T[]): void; }
interface ArrayPredicateCallback<T> { (item: T, index: number, array: T[]): boolean; }
interface ArrayTransformCallback<T, V> { (item: T, index: number, array: T[]): V; }

// AMD definitions

declare function require<T>(depends: string): T;
declare function require<T>(depends: string[], callback: GenericFunctionReturning<T>): T;

declare function define<T>(id: string, depends: string[], callback: GenericFunctionReturning<T>): T;
declare function define<T>(depends: string[], callback: GenericFunctionReturning<T>): T;
declare function define(obj: Object);
