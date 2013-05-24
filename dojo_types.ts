// Types

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

interface GenericBlankFunction { (): void; }
interface GenericAction { (...v_args: any[]): void; }
interface GenericFunction { (...v_args: any[]): any; }
interface GenericFunctionReturning<T> { (...v_args: any[]): T; }

interface DojoExtensionEvent { (...v_args: any[]): void; }

interface ArrayLoopCallback<T> { (item: T, index?: number, array?: T[]): void; }
interface ArrayPredicateCallback<T> { (item: T, index?: number, array?: T[]): boolean; }
interface ArrayTransformCallback<T, V> { (item: T, index?: number, array?: T[]): V; }

// AMD definitions

declare function require<T>(depends: string): T;
declare function require<T>(depends: string[], func: (...v_args: any[]) => T): T;

declare function define<T>(id: string, depends: string[], func: (... v_args: any[]) => T): T;
declare function define<T>(depends: string[], func: (...v_args: any[]) => T): T;
declare function define(obj: Object);
