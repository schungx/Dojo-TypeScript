/************************************************************************/
/* Define dojo/store package                                            */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

interface _HTMLArray<T> extends Array<T> { }

declare module Dojo {
	module Store {
		// dojo/store/api/Store

		class _Store<T extends Object, K>
		{
			idProperty: string;

			queryEngine(query: string, options?: QueryOptions): QueryEngine<T>;
			queryEngine(query: AttributesMap, options?: QueryOptions): QueryEngine<T>;
			queryEngine(query: RegExp, options?: QueryOptions): QueryEngine<T>;
			queryEngine(query: (item: T) => boolean, options?: QueryOptions): QueryEngine<T>;

			PutDirectives: new () => PutDirectives<T, K>;
			QueryOptions: new () => QueryOptions;
			QueryResults: new () => QueryResults<T>;
			SortInformation: new () => SortInformation;
		}

		class Store<T extends Object, K> extends _Store<T, K>
		{
			add(object: T, directives?: PutDirectives<T, K>): K;
			get(id: K): T;
			getChildren<V>(parent: T, options?: QueryOptions): QueryResults<V>;
			getIdentity(object: T): K;
			getMetadata(object: T): { [metadata: string]: any; };
			put(object: T, directives?: PutDirectives<T, K>): K;

			query(query: string, options?: QueryOptions): QueryResults<T>;
			query(query: AttributesMap, options?: QueryOptions): QueryResults<T>;
			query(query: (item: T) => boolean, options?: QueryOptions): QueryResults<T>;

			remove(id: K): boolean;

			transaction(): Transaction;
			Transaction: new () => Transaction;
		}

		class StoreAsync<T extends Object, K> extends _Store<T, K>
		{
			add(object: T, directives?: PutDirectives<T, K>): dojo.Promise<K>;
			get(id: K): dojo.Promise<T>;
			getChildren<V>(parent: T, options?: QueryOptions): dojo.Promise<QueryResults<V>>;
			getIdentity(object: T): dojo.Promise<K>;
			getMetadata(object: T): dojo.Promise<Object>;
			put(object: T, directives?: PutDirectives<T, K>): dojo.Promise<K>;

			query(query: string, options?: QueryOptions): dojo.Promise<QueryResults<T>>;
			query(query: AttributesMap, options?: QueryOptions): dojo.Promise<QueryResults<T>>;
			query(query: (item: T) => boolean, options?: QueryOptions): dojo.Promise<QueryResults<T>>;

			remove(id: K): boolean;

			transaction(): TransactionAsync;
			Transaction: new () => TransactionAsync;
		}

		// Query Engine

		interface QueryEngine<T extends Object> {
			(query: string, options?: QueryOptions): (data: T[]) => T[];
			(query: AttributesMap, options?: QueryOptions): (data: T[]) => T[];
			(query: RegExp, options?: QueryOptions): (data: T[]) => T[];
			(query: (item: T) => boolean, options?: QueryOptions): (data: T[]) => T[];

			matches?: (data: T) => boolean;
		}

		// dojo/store/api/Store.PutDirectives

		interface PutDirectives<T extends Object, K> {
			id?: K;
			before?: T;
			parent?: Object;
			overwrite?: boolean;
		}

		// dojo/store/api/Store.QueryOptions

		interface QueryOptions {
			start?: number;
			count?: number;
			sort?: SortInformation[];
		}

		// dojo/store/api/Store.QueryResults
		// NOTE - QueryResults may be a simple array or a promise

		interface QueryResults<T extends Object> extends _HTMLArray<T> {
			total: number;

			filter(callback: (item: T, index: number, array: T[]) => boolean, thisObject?: Object): QueryResults<T>;
			forEach(callback: (item: T, index: number, array: T[]) => void, thisObject?: Object): QueryResults<T>;
			map<V extends Object>(callback: (item: T, index: number, array: T[]) => V, thisObject?: Object): QueryResults<V>;

			// Added by dojo/store/Observable
			observe? (listener: (object: T, removedFrom: number, insertedInto: number) => void, includeAllUpdates?: boolean): Dojo.CancellableHandle;
		}

		// dojo/store/api/Store.SortInformation

		interface SortInformation {
			attribute: string;
			descending?: boolean;
		}

		// dojo/store/api/Store.Transaction

		interface Transaction {
			abort(callback?: Function, thisObject?: Object): boolean;
			commit(): boolean;
		}
		interface TransactionAsync {
			abort(callback?: Function, thisObject?: Object): dojo.Promise<boolean>;
			commit(): dojo.Promise<boolean>;
		}

		// Create options

		interface CreateOptions {
			idProperty?: string;
		}

		// dojo/store/Memory

		module Memory {
			interface CreateOptions<T extends Object> extends Dojo.Store.CreateOptions {
				data?: T[];
			}
			class Store<T extends Object, K> extends Dojo.Store.Store<T, K> implements CreateOptions<T>
			{
				constructor(options: CreateOptions<T>);

				idProperty: string;
				data: T[];
				index: Dojo.Dictionary<number>;
			}
		}

		// dojo/store/DataStore

		module DataStore {
			interface CreateOptions extends Dojo.Store.CreateOptions {
				target?: string;
				store?: Object;		// Should be DojoDataStore, but needs to pull in dojo_data.ts and dojo.ts, so don't do it
			}
			class Store<T extends Object, K> extends Dojo.Store.Store<T, K> implements CreateOptions {
				constructor(options: CreateOptions);

				idProperty: string;
				target: string;
				store: Object;
			}
			class StoreAsync<T extends Object, K> extends Dojo.Store.StoreAsync<T, K> implements CreateOptions {
				constructor(options: CreateOptions);

				idProperty: string;
				target: string;
				store: Object;
			}
		}

		// dojo/store/JsonRest

		module JsonRest {
			interface CreateOptions extends Dojo.Store.CreateOptions {
				target?: string;
				accepts?: string;
				ascendingPrefix?: string;
				descendingPrefix?: string;
				headers?: { [header: string]: string; };
			}
			class Store<T extends Object, K> extends Dojo.Store.StoreAsync<T, K> implements CreateOptions {
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
	var Memory: typeof Dojo.Store.Memory.Store;
	export = Memory;
}
declare module "dojo/store/DataStore"
{
	var DataStore: typeof Dojo.Store.DataStore.Store;
	export = DataStore;
}
declare module "dojo/store/JsonRest"
{
	var JsonRest: typeof Dojo.Store.JsonRest.Store;
	export = JsonRest;
}

// dojo/store/Observable

declare module Dojo {
	module Store {
		interface Observable {
			<T extends Object, K>(store: _Store<T, K>): _Store<T, K>;
		}
	}
}
declare module "dojo/store/Observable"
{
	var Observable: Dojo.Store.Observable;
	export = Observable;
}

// dojo/store/Cache

declare module Dojo {
	module Store {
		interface Cache {
			<T extends Object, K>(masterStore: _Store<T, K>, cachingStore: _Store<T, K>, options?: { isLoaded?: (item: T) => boolean; }): _Store<T, K>;
		}
	}
}
declare module "dojo/store/Cache"
{
	var Cache: Dojo.Store.Cache;
	export = Cache;
}