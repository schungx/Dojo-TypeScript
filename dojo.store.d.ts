/************************************************************************/
/* Define dojo/store package                                            */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

declare module Dojo
{
	module Store
	{
		// dojo/store/api/Store

		class _Store<T>
		{
			idProperty: string;

			queryEngine(query: string, options?: QueryOptions): QueryEngine<T>;
			queryEngine(query: AttributesMap, options?: QueryOptions): QueryEngine<T>;
			queryEngine(query: RegExp, options?: QueryOptions): QueryEngine<T>;
			queryEngine(query: (item: T) => boolean, options?: QueryOptions): QueryEngine<T>;

			PutDirectives: new () => PutDirectives;
			QueryOptions: new () => QueryOptions;
			QueryResults: new () => QueryResults;
			SortInformation: new () => SortInformation;
		}

		class Store<T> extends _Store<T>
		{
			add(object: T, directives?: PutDirectives<T>): number;
			get(id: number): T;
			getChildren<V>(parent: T, options?: QueryOptions): QueryResults<V>;
			getIdentity(object: T): number;
			getMetadata(object: T): { [metadata: string]: any; };
			put(object: T, directives?: PutDirectives<T>): number;

			query(query: string, options?: QueryOptions): QueryResults<T>;
			query(query: AttributesMap, options?: QueryOptions): QueryResults<T>;
			query(query: (item: T) => boolean, options?: QueryOptions): QueryResults<T>;

			remove(id: number): boolean;

			transaction(): Transaction;
			Transaction: new () => Transaction;
		}

		class StoreAsync<T> extends _Store<T>
		{
			add(object: T, directives?: PutDirectives<T>): Promise<number>;
			get(id: number): Promise<T>;
			getChildren<V>(parent: T, options?: QueryOptions): Promise<QueryResults<V>>;
			getIdentity(object: T): Promise<number>;
			getMetadata(object: T): Promise<Object>;
			put(object: T, directives?: PutDirectives<T>): Promise<number>;

			query(query: string, options?: QueryOptions): Promise<QueryResults<T>>;
			query(query: AttributesMap, options?: QueryOptions): Promise<QueryResults<T>>;
			query(query: (item: T) => boolean, options?: QueryOptions): Promise<QueryResults<T>>;

			remove(id: number): boolean;

			transaction(): TransactionAsync;
			Transaction: new () => TransactionAsync;
		}

		// Query Engine

		interface QueryEngine<T>
		{
			(query: string, options?: QueryOptions): (data: T[]) => T[];
			(query: AttributesMap, options?: QueryOptions): (data: T[]) => T[];
			(query: RegExp, options?: QueryOptions): (data: T[]) => T[];
			(query: (item: T) => boolean, options?: QueryOptions): (data: T[]) => T[];

			matches?: (data: T) => boolean;
		}
	
		// dojo/store/api/Store.PutDirectives

		interface PutDirectives<T>
		{
			id?: number;
			before?: T;
			parent?: Object;
			overwrite?: boolean;
		}

		// dojo/store/api/Store.QueryOptions

		interface QueryOptions
		{
			start?: number;
			count?: number;
			sort?: SortInformation[];
		}

		// dojo/store/api/Store.QueryResults

		interface QueryResults<T> extends Array<T>
		{
			total: number;

			filter(callback: (item: T) => boolean, thisObject?: Object): QueryResults<T>;
			forEach(callback: (item: T) => void , thisObject?: Object): QueryResults<T>;
			map<V>(callback: (item: T) => V, thisObject?: Object): QueryResults<V>;
			then(callback: (items: T[]) => void , errorHandler: (error: any) => void ): QueryResults<T>;

			observe? (listener: (object: any, removedFrom: number, insertedInto: number) => void , includeAllUpdates?: boolean): { cancel(): void; };
		}

		// dojo/store/api/Store.SortInformation

		interface SortInformation
		{
			attribute: string;
			descending?: boolean;
		}

		// dojo/store/api/Store.Transaction

		interface Transaction
		{
			abort(callback?: Function, thisObject?: Object): boolean;
			commit(): boolean;
		}
		interface TransactionAsync
		{
			abort(callback?: Function, thisObject?: Object): Promise<boolean>;
			commit(): Promise<boolean>;
		}

		// Create options

		interface CreateOptions
		{
			idProperty?: string;
		}

		// dojo/store/Memory

		module Memory
		{
			interface CreateOptions extends Dojo.Store.CreateOptions
			{
				data?: any[];
			}
			class MemoryStore<T> extends _DojoStoreMemoryStore<T> {}
		}
	
		// dojo/store/DataStore

		module Data
		{
			interface CreateOptions extends Dojo.Store.CreateOptions
			{
				target?: string;
				store?: Object;		// Should be DojoDataStore, but needs to pull in dojo_data.ts and dojo.ts, so don't do it
			}
			class DataStore<T> extends _DojoStoreDataStore <T> {}
			class DataStoreAsync<T> extends _DojoStoreDataStoreAsync<T> {}
		}

		// dojo/store/JsonRest

		module JsonRest
		{
			interface CreateOptions extends Dojo.Store.CreateOptions
			{
				target?: string;
				accepts?: string;
				ascendingPrefix?: string;
				descendingPrefix?: string;
				headers?: { [header: string]: string; };
			}
			class JsonRestStore<T> extends _DojoStoreJsonRestStore<T> {}
		}
	}
}


// Generic classes that must reside at the root level because "export =" cannot handle namespaces
// and we cannot use a variable because the classes are generic!

declare class _DojoStoreMemoryStore<T> extends Dojo.Store.Store<T> implements Dojo.Store.CreateOptions
{
	constructor(options: Dojo.Store.CreateOptions);

	idProperty: string;
	data: any[];
	index: Dojo.Dictionary<number>;
}
declare class _DojoStoreDataStore<T> extends Dojo.Store.Store<T> implements Dojo.Store.CreateOptions
{
	constructor(options: Dojo.Store.CreateOptions);

	idProperty: string;
	target: string;
	store: Object;
}
declare class _DojoStoreDataStoreAsync<T> extends Dojo.Store.StoreAsync<T> implements Dojo.Store.CreateOptions
{
	constructor(options: Dojo.Store.CreateOptions);

	idProperty: string;
	target: string;
	store: Object;
}
declare class _DojoStoreJsonRestStore<T> extends Dojo.Store.StoreAsync<T> implements Dojo.Store.CreateOptions
{
	constructor(options: Dojo.Store.CreateOptions);

	idProperty: string;
	target: string;
	accepts: string;
	ascendingPrefix: string;
	descendingPrefix: string;
	headers: { [header: string]: string; };
}


// Module definitions

declare module "dojo/store/Memory" 
{
	export = _DojoStoreMemoryStore;
}
declare module "dojo/store/DataStore"
{
	export = _DojoStoreDataStore;
}
declare module "dojo/store/JsonRest"
{
	export = _DojoStoreJsonRestStore;
}

// dojo/store/Observable

declare module "dojo/store/Observable"
{
	function Observable<V, S extends Dojo.Store._Store<V>>(store: S): S;

	export = Observable;
}

// dojo/store/Cache

declare module "dojo/store/Cache"
{
	function Cache<V, S extends Dojo.Store._Store<V>>(masterStore: S, cachingStore: Dojo.Store._Store<V>, options?: { isLoaded?: (item: V) => bool; }): S;

	export = Cache;
}
