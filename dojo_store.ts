/// <reference path="dojo_types.ts"/>

// dojo/store/api/Store

declare class DojoStore
{
	idProperty: string;
	queryEngine(query: string, options?: DojoStoreApiStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: Object, options?: DojoStoreApiStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: RegExp, options?: DojoStoreApiStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: (item: Object) => boolean, options?: DojoStoreApiStoreQueryOptions): (data: any[]) => any[];

	add(object: Object, directives?: DojoStoreApiStorePutDirectives): number;
	get(id: number): Object;
	getChildren(parent: Object, options?: DojoStoreApiStoreQueryOptions): DojoStoreApiStoreQueryResults;
	getIdentity(object: Object): number;
	getMetadata(object: Object): Object;
	put(object: Object, directives?: DojoStoreApiStorePutDirectives): number;

	query(query: string, options?: DojoStoreApiStoreQueryOptions): DojoStoreApiStoreQueryResults;
	query(query: Object, options?: DojoStoreApiStoreQueryOptions): DojoStoreApiStoreQueryResults;
	query(query: (item: Object) => boolean, options?: DojoStoreApiStoreQueryOptions): DojoStoreApiStoreQueryResults;

	remove(id: number): boolean;
	transaction(): DojoStoreApiStoreTransaction;

	PutDirectives: new ()=> DojoStoreApiStorePutDirectives;
	QueryOptions: new ()=> DojoStoreApiStoreQueryOptions;
	QueryResults: new ()=> DojoStoreApiStoreQueryResults;
	SortInformation: new ()=> DojoStoreApiStoreSortInformation;
	Transaction: new ()=> DojoStoreApiStoreTransaction;
}

// dojo/store/Observable

declare class DojoStoreObservable
{
	constructor(store: DojoStore);
}
interface IDojoStoreObservable
{
	new (store: DojoStore): DojoStoreObservable;
}

// dojo/store/api/Store.PutDirectives

interface DojoStoreApiStorePutDirectives
{
	id?: number;
	before?: Object;
	parent?: Object;
	overwrite?: boolean;
}

// dojo/store/api/Store.QueryOptions

interface DojoStoreApiStoreQueryOptions
{
	start?: number;
	count?: number;
	sort?: DojoStoreApiStoreSortInformation[];
}

// dojo/store/api/Store.QueryResults

interface DojoStoreApiStoreQueryResults
{
	total: number;

	filter(callback: (item: Object) => void , thisObject?: Object): DojoStoreApiStoreQueryResults;
	forEach(callback: (item: Object) => void , thisObject?: Object): DojoStoreApiStoreQueryResults;
	map(callback: (item: Object) => any, thisObject?: Object): DojoStoreApiStoreQueryResults;
	then(callback: (items: Object[]) => void , errorHandler: (error: Object) => void ): DojoStoreApiStoreQueryResults;

	observe? (listener: (object: Object, removedFrom: number, insertedInto: number) => void , includeAllUpdates?: boolean): { cancel(): void; };
}

// dojo/store/api/Store.SortInformation

interface DojoStoreApiStoreSortInformation
{
	attribute: string;
	descending?: boolean;
}

// dojo/store/api/Store.Transaction

interface DojoStoreApiStoreTransaction
{
	abort(callback?: Function, thisObject?: Object): void;
	commit(): void;
}

// dojo/store/Memory

interface DojoStoreMemoryCreateOptions
{
	data?: any[];
	idProperty?: string;
}
declare class DojoStoreMemory extends DojoStore implements DojoStoreMemoryCreateOptions
{
	constructor(options: DojoStoreMemoryCreateOptions);

	data: any[];
	idProperty: string;
	index: { [id: string]: number; };
}
interface IDojoStoreMemory
{
	new (options: DojoStoreMemoryCreateOptions): DojoStoreMemory;
};

// dojo/store/DataStore

interface DojoStoreDataStoreCreateOptions
{
	idProperty?: string;
	store?: Object;		// Should be DojoDataStore, but needs to pull in dojo_data.ts and dojo.ts, so don't do it
	target?: string;
}
declare class DojoStoreDataStore extends DojoStore implements DojoStoreDataStoreCreateOptions
{
	constructor(options: DojoStoreDataStoreCreateOptions);

	idProperty: string;
	store: Object;
	target: string;
}
interface IDojoStoreDataStore
{
	new (options: DojoStoreDataStoreCreateOptions): DojoStoreDataStore;
}

// dojo/store/JsonRest

interface DojoStoreJsonRestCreateOptions
{
	accepts?: string;
	ascendingPrefix?: string;
	descendingPrefix?: string;
	headers?: { [header: string]: string; };
	idProperty?: string;
	queryEngine(query: any, options?: DojoStoreApiStoreQueryOptions): (data: any[]) => any[];
	target?: string;
}
declare class DojoStoreJsonRest extends DojoStore implements DojoStoreJsonRestCreateOptions
{
	constructor(options: DojoStoreJsonRestCreateOptions);

	accepts: string;
	ascendingPrefix: string;
	descendingPrefix: string;
	headers: { [header: string]: string; };
	idProperty: string;
	queryEngine(query: string, options?: DojoStoreApiStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: Object, options?: DojoStoreApiStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: RegExp, options?: DojoStoreApiStoreQueryOptions): (data: any[]) => any[];
	queryEngine(query: (item: Object) => boolean, options?: DojoStoreApiStoreQueryOptions): (data: any[]) => any[];
	target: string;
}

interface IDojoStoreJsonRest
{
	new (options: DojoStoreJsonRestCreateOptions): DojoStoreJsonRest;
}

// dojo/store/Observable

interface DojoStoreObservable
{
	(store: DojoStore): DojoStore;
}

// dojo/store/Cache

interface DojoStoreCache
{
	(masterStore: DojoStore, cachingStore: DojoStore, options?: { isLoaded?: (item: any) => bool; }): DojoStore;
}
