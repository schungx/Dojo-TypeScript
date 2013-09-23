/************************************************************************/
/* Define dojo/store package                                            */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

interface _HTMLArray<T> extends Array<T> { }

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

			PutDirectives: new () => PutDirectives<T>;
			QueryOptions: new () => QueryOptions;
			QueryResults: new () => QueryResults<T>;
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
			add(object: T, directives?: PutDirectives<T>): dojo.Promise<number>;
			get(id: number): dojo.Promise<T>;
			getChildren<V>(parent: T, options?: QueryOptions): dojo.Promise<QueryResults<V>>;
			getIdentity(object: T): dojo.Promise<number>;
			getMetadata(object: T): dojo.Promise<Object>;
			put(object: T, directives?: PutDirectives<T>): dojo.Promise<number>;

			query(query: string, options?: QueryOptions): dojo.Promise<QueryResults<T>>;
			query(query: AttributesMap, options?: QueryOptions): dojo.Promise<QueryResults<T>>;
			query(query: (item: T) => boolean, options?: QueryOptions): dojo.Promise<QueryResults<T>>;

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

		interface QueryResults<T> extends _HTMLArray<T>
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
			abort(callback?: Function, thisObject?: Object): dojo.Promise<boolean>;
			commit(): dojo.Promise<boolean>;
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
			class Store<T> extends Dojo.Store.Store<T> implements CreateOptions
			{
				constructor(options: CreateOptions);

				idProperty: string;
				data: any[];
				index: Dojo.Dictionary<number>;
			}
		}
	
		// dojo/store/DataStore

		module DataStore
		{
			interface CreateOptions extends Dojo.Store.CreateOptions
			{
				target?: string;
				store?: Object;		// Should be DojoDataStore, but needs to pull in dojo_data.ts and dojo.ts, so don't do it
			}
			class Store<T> extends Dojo.Store.Store<T> implements CreateOptions
			{
				constructor(options: CreateOptions);

				idProperty: string;
				target: string;
				store: Object;
			}
			class StoreAsync<T> extends Dojo.Store.StoreAsync<T> implements CreateOptions
			{
				constructor(options: CreateOptions);

				idProperty: string;
				target: string;
				store: Object;
			}
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
			class Store<T> extends Dojo.Store.StoreAsync<T> implements CreateOptions
			{
				constructor(options: CreateOptions);

				idProperty: string;
				target: string;
				accepts: string;
				ascendingPrefix: string;
				descendingPrefix: string;
				headers: { [header: string]: string; };
			}
		}
	}
}


// Module definitions

declare module "dojo/store/Memory" 
{
	class Memory<T> extends Dojo.Store.Memory.Store<T> { }
	export = Memory;
}
declare module "dojo/store/DataStore"
{
	class DataStore<T> extends Dojo.Store.DataStore.Store<T> { }
	export = DataStore;
}
declare module "dojo/store/JsonRest"
{
	class JsonRest<T> extends Dojo.Store.JsonRest.Store<T> { }
	export = JsonRest;
}

// dojo/store/Observable

declare module Dojo
{
	module Store
	{
		interface Observable
		{
			<V, S extends _Store<V>>(store: S): S;
		}
	}
}
declare module "dojo/store/Observable"
{
	var Observable: Dojo.Store.Observable;
	export = Observable;
}

// dojo/store/Cache

declare module Dojo
{
	module Store
	{
		interface Cache
		{
			<V, S extends _Store<V>>(masterStore: S, cachingStore: _Store<V>, options?: { isLoaded?: (item: V) => boolean; }): S;
		}
	}
}
declare module "dojo/store/Cache"
{
	var Cache: Dojo.Store.Cache;
	export = Cache;
}
