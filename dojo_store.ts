/************************************************************************/
/* Define dojo/store package                                            */
/************************************************************************/

/// <reference path="dojo_types.ts"/>

// dojo/store/api/Store

declare class DojoStore
{
	idProperty: string;
	queryEngine(query: string, options?: _DojoStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: Object, options?: _DojoStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: RegExp, options?: _DojoStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: (item: Object) => boolean, options?: _DojoStoreQueryOptions): (data: any[]) => any[];

	add(object: Object, directives?: _DojoStorePutDirectives): number;
	get(id: number): Object;
	getChildren(parent: Object, options?: _DojoStoreQueryOptions): DojoStoreQueryResults;
	getIdentity(object: Object): number;
	getMetadata(object: Object): Object;
	put(object: Object, directives?: _DojoStorePutDirectives): number;

	query(query: string, options?: _DojoStoreQueryOptions): DojoStoreQueryResults;
	query(query: Object, options?: _DojoStoreQueryOptions): DojoStoreQueryResults;
	query(query: (item: Object) => boolean, options?: _DojoStoreQueryOptions): DojoStoreQueryResults;

	remove(id: number): boolean;
	transaction(): DojoStoreTransaction;

	PutDirectives: new ()=> _DojoStorePutDirectives;
	QueryOptions: new ()=> _DojoStoreQueryOptions;
	QueryResults: new ()=> DojoStoreQueryResults;
	SortInformation: new ()=> _DojoStoreSortInformation;
	Transaction: new ()=> DojoStoreTransaction;
}

// dojo/store/Observable

declare class DojoStoreObservable
{
	constructor(store: DojoStore);
}
declare module "dojo/store/Observable"
{
	export = DojoStoreObservable;
}

// dojo/store/api/Store.PutDirectives

interface _DojoStorePutDirectives
{
	id?: number;
	before?: Object;
	parent?: Object;
	overwrite?: boolean;
}

// dojo/store/api/Store.QueryOptions

interface _DojoStoreQueryOptions
{
	start?: number;
	count?: number;
	sort?: _DojoStoreSortInformation[];
}

// dojo/store/api/Store.QueryResults

interface DojoStoreQueryResults
{
	total: number;

	filter(callback: (item: Object) => void , thisObject?: Object): DojoStoreQueryResults;
	forEach(callback: (item: Object) => void , thisObject?: Object): DojoStoreQueryResults;
	map(callback: (item: Object) => any, thisObject?: Object): DojoStoreQueryResults;
	then(callback: (items: Object[]) => void , errorHandler: (error: Object) => void ): DojoStoreQueryResults;

	observe? (listener: (object: Object, removedFrom: number, insertedInto: number) => void , includeAllUpdates?: boolean): { cancel(): void; };
}

// dojo/store/api/Store.SortInformation

interface _DojoStoreSortInformation
{
	attribute: string;
	descending?: boolean;
}

// dojo/store/api/Store.Transaction

interface DojoStoreTransaction
{
	abort(callback?: Function, thisObject?: Object): void;
	commit(): void;
}

// dojo/store/Memory

interface _DojoStoreMemoryCreateOptions
{
	data?: any[];
	idProperty?: string;
}
declare class DojoStoreMemory extends DojoStore implements _DojoStoreMemoryCreateOptions
{
	constructor(options: _DojoStoreMemoryCreateOptions);

	data: any[];
	idProperty: string;
	index: { [id: string]: number; };
}
declare module "dojo/store/Memory"
{
	export = DojoStoreMemory;
};

// dojo/store/DataStore

interface _DojoStoreDataStoreCreateOptions
{
	idProperty?: string;
	store?: Object;		// Should be DojoDataStore, but needs to pull in dojo_data.ts and dojo.ts, so don't do it
	target?: string;
}
declare class DojoStoreDataStore extends DojoStore implements _DojoStoreDataStoreCreateOptions
{
	constructor(options: _DojoStoreDataStoreCreateOptions);

	idProperty: string;
	store: Object;
	target: string;
}
declare module "dojo/store/DataStore"
{
	export = DojoStoreDataStore;
}

// dojo/store/JsonRest

interface _DojoStoreJsonRestCreateOptions
{
	accepts?: string;
	ascendingPrefix?: string;
	descendingPrefix?: string;
	headers?: { [header: string]: string; };
	idProperty?: string;
	queryEngine(query: any, options?: _DojoStoreQueryOptions): (data: any[]) => any[];
	target?: string;
}
declare class DojoStoreJsonRest extends DojoStore implements _DojoStoreJsonRestCreateOptions
{
	constructor(options: _DojoStoreJsonRestCreateOptions);

	accepts: string;
	ascendingPrefix: string;
	descendingPrefix: string;
	headers: { [header: string]: string; };
	idProperty: string;
	queryEngine(query: string, options?: _DojoStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: Object, options?: _DojoStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: RegExp, options?: _DojoStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: (item: Object) => boolean, options?: _DojoStoreQueryOptions): (data: any[]) => any[];
	target: string;
}

declare module "dojo/store/JsonRest"
{
	export = DojoStoreJsonRest;
}

// dojo/store/Observable

declare module "dojo/store/Observable"
{
	function Observable(store: DojoStore): DojoStore;

	export = Observable;
}

// dojo/store/Cache

declare module "dojo/store/Cache"
{
	function Cache(masterStore: DojoStore, cachingStore: DojoStore, options?: { isLoaded?: (item: any) => bool; }): DojoStore;

	export = Cache;
}
