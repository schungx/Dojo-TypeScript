/************************************************************************/
/* Define dojo/store package                                            */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

declare module Dojo.Store
{
	// dojo/store/api/Store

	export class Store
	{
		idProperty: string;
		queryEngine(query: string, options?: QueryOptions): (data: any[]) => any[];
		queryEngine(query: Object, options?: QueryOptions): (data: any[]) => any[];
		queryEngine(query: RegExp, options?: QueryOptions): (data: any[]) => any[];
		queryEngine(query: (item: Object) => boolean, options?: QueryOptions): (data: any[]) => any[];

		add(object: Object, directives?: PutDirectives): number;
		get(id: number): Object;
		getChildren(parent: Object, options?: QueryOptions): QueryResults;
		getIdentity(object: Object): number;
		getMetadata(object: Object): Object;
		put(object: Object, directives?: PutDirectives): number;

		query(query: string, options?: QueryOptions): QueryResults;
		query(query: Object, options?: QueryOptions): QueryResults;
		query(query: (item: Object) => boolean, options?: QueryOptions): QueryResults;

		remove(id: number): boolean;
		transaction(): Transaction;

		PutDirectives: new ()=> PutDirectives;
		QueryOptions: new ()=> QueryOptions;
		QueryResults: new ()=> QueryResults;
		SortInformation: new ()=> SortInformation;
		Transaction: new ()=> Transaction;
	}

	// dojo/store/Observable

	export class Observable
	{
		constructor(store: Store);
	}

	// dojo/store/api/Store.PutDirectives

	export interface PutDirectives
	{
		id?: number;
		before?: Object;
		parent?: Object;
		overwrite?: boolean;
	}

	// dojo/store/api/Store.QueryOptions

	export interface QueryOptions
	{
		start?: number;
		count?: number;
		sort?: SortInformation[];
	}

	// dojo/store/api/Store.QueryResults

	export interface QueryResults
	{
		total: number;

		filter(callback: (item: Object) => void , thisObject?: Object): QueryResults;
		forEach(callback: (item: Object) => void , thisObject?: Object): QueryResults;
		map(callback: (item: Object) => any, thisObject?: Object): QueryResults;
		then(callback: (items: Object[]) => void , errorHandler: (error: Object) => void ): QueryResults;

		observe? (listener: (object: Object, removedFrom: number, insertedInto: number) => void , includeAllUpdates?: boolean): { cancel(): void; };
	}

	// dojo/store/api/Store.SortInformation

	export interface SortInformation
	{
		attribute: string;
		descending?: boolean;
	}

	// dojo/store/api/Store.Transaction

	export interface Transaction
	{
		abort(callback?: Function, thisObject?: Object): void;
		commit(): void;
	}

	// dojo/store/Memory

	interface MemoryStoreCreateOptions
	{
		data?: any[];
		idProperty?: string;
	}
	export class Memory extends Store.Store implements MemoryStoreCreateOptions
	{
		constructor(options: MemoryStoreCreateOptions);

		data: any[];
		idProperty: string;
		index: { [id: string]: number; };
	}

	// dojo/store/DataStore

	export interface DataStoreCreateOptions
	{
		idProperty?: string;
		store?: Object;		// Should be DojoDataStore, but needs to pull in dojo_data.ts and dojo.ts, so don't do it
		target?: string;
	}
	export class DataStore extends Store.Store implements DataStoreCreateOptions
	{
		constructor(options: DataStoreCreateOptions);

		idProperty: string;
		store: Object;
		target: string;
	}

	// dojo/store/JsonRest

	export interface JsonRestStoreCreateOptions
	{
		accepts?: string;
		ascendingPrefix?: string;
		descendingPrefix?: string;
		headers?: { [header: string]: string; };
		idProperty?: string;
		queryEngine(query: any, options?: QueryOptions): (data: any[]) => any[];
		target?: string;
	}
	export class JsonRest extends Store.Store implements JsonRestStoreCreateOptions
	{
		constructor(options: JsonRestStoreCreateOptions);

		accepts: string;
		ascendingPrefix: string;
		descendingPrefix: string;
		headers: { [header: string]: string; };
		idProperty: string;
		queryEngine(query: string, options?: QueryOptions): (data: any[]) => any[];
		queryEngine(query: Object, options?: QueryOptions): (data: any[]) => any[];
		queryEngine(query: RegExp, options?: QueryOptions): (data: any[]) => any[];
		queryEngine(query: (item: Object) => boolean, options?: QueryOptions): (data: any[]) => any[];
		target: string;
	}
}


// Module definitions

declare module "dojo/store/Memory" 
{
	var Memory: Dojo.Store.Memory;
	export = Memory;
}
declare module "dojo/store/DataStore"
{
	var DataStore: Dojo.Store.DataStore;
	export = DataStore;
}
declare module "dojo/store/JsonRest"
{
	var JsonRest: Dojo.Store.JsonRest;
	export = JsonRest;
}

// dojo/store/Observable

declare module "dojo/store/Observable"
{
	function Observable(store: Dojo.Store.Store): Dojo.Store.Store;

	export = Observable;
}

// dojo/store/Cache

declare module "dojo/store/Cache"
{
	function Cache(masterStore: Dojo.Store.Store, cachingStore: Dojo.Store.Store, options?: { isLoaded?: (item: any) => bool; }): Dojo.Store.Store;

	export = Cache;
}
