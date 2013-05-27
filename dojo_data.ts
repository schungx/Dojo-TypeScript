/************************************************************************/
/* Define dojo/data package                                             */
/************************************************************************/

/// <reference path="dojo.ts"/>

// dojo/data/api

interface DojoDataRequest extends _DojoDataRequestArgs
{
	abort(): void;
}

// dojo/data

declare class DojoDataStore extends DojoEvented
{
}

// dojo/data/ItemFileReadStore

declare class DojoDataItemFileReadStore extends DojoDataStore implements DojoDataUtilSimpleFetch
{
	constructor(keywordParameters: {
		url?: string;
		data?: Object;
		typeMap?: Object;
	});

	clearOnClose: boolean;
	data: Object;
	failOk: boolean;
	hierarchical: boolean;
	typeMap: Object;
	url: string;
	urlPreventCache: boolean;

	close(request: DojoDataRequest): void;
	containsValue(item: Object, attribute: string, value: any): boolean;
	fetchItemByIdentity(keywordArgs: {
		identity: Object;
		onItem?: (item: Object) => void;
		onError?: (error: Object) => void;
		scope?: Object;
	}): Object;
	filter(requestArgs: _DojoDataRequestArgs, arrayOfItems: Object[], findCallback: (item: Object) => void ): void;
	getAttributes(item: Object): string[];
	getFeatures(): { [feature: string]: boolean; };
	getIdentity(item: Object): Object;
	getIdentityAttributes(item: Object): string[];
	getLabel(item: Object): string;
	getLabelAttributes(item: Object): string[];
	getValue(item: Object, attribute: string, defaultValue?: any): any;
	getValues(item: Object, attribute: string): any[];
	hasAttribute(item: Object, attribute: string): boolean;
	isItem(something: Object): boolean;
	isItemLoaded(something: Object): boolean;
	loadItem(keywordArgs: {
		item: Object;
		onItem?: (item: Object) => void;
		onError?: (error: Object) => void;
		scope?: Object;
	}): void;

	// dojo/data/util/simpleFetch
	fetch(keywordArgs: _DojoDataRequestArgs): DojoDataRequest;
}
declare module "dojo/data/ItemFileReadStore"
{
	export = DojoDataItemFileReadStore;
}

// dojo/data/ItemFileWriteStore

declare class DojoDataItemFileWriteStore extends DojoDataItemFileReadStore
{
	referenceIntegrity: boolean;

	deleteItem(item: Object): boolean;
	isDirty(item: Object): boolean;
	newItem(keywordArgs?: Object, parentInfo?: { parent: Object; attribute: string; }): Object;
	revert(): boolean;
	save(keywordArgs: {
		onComplete?: () => void;
		onError?: (error: Object) => void;
		scope?: Object;
	}): boolean;
	setValue(item: Object, attribute: string, value: any): boolean;
	setValues(item: Object, attribute: string, values: any[]): boolean;
	unsetAttribute(item: Object, attribute: string): boolean;
}
declare module "dojo/data/ItemFileWriteStore"
{
	export = DojoDataItemFileWriteStore;
}

// dojo/data/ObjectStore

declare class DojoDataObjectStore extends DojoEvented implements DojoDataUtilSimpleFetch
{
	constructor(keywordParameters: {
		url?: string;
		data?: Object;
		typeMap?: Object;
	});

	labelProperty: string;
	objectStore: Object;		// Should be DojoStore, but needs to pull in dojo_store.ts, so don't do it

	changing(object: Object, _deleting: boolean): void;

	// Read
	close(request: DojoDataRequest): void;
	containsValue(item: Object, attribute: string, value: any): boolean;
	fetchItemByIdentity(keywordArgs: {
		identity: Object;
		onItem?: (item: Object) => void;
		onError?: (error: Object) => void;
		scope?: Object;
	}): Object;
	filter(requestArgs: _DojoDataRequestArgs, arrayOfItems: Object[], findCallback: (item: Object) => void ): void;
	getAttributes(item: Object): string[];
	getFeatures(): { [feature: string]: boolean; };
	getIdentity(item: Object): Object;
	getIdentityAttributes(item: Object): string[];
	getLabel(item: Object): string;
	getLabelAttributes(item: Object): string[];
	getValue(item: Object, attribute: string, defaultValue?: any): any;
	getValues(item: Object, attribute: string): any[];
	hasAttribute(item: Object, attribute: string): boolean;
	isItem(something: Object): boolean;
	isItemLoaded(something: Object): boolean;
	loadItem(keywordArgs: {
		item: Object;
		onItem?: (item: Object) => void;
		onError?: (error: Object) => void;
		scope?: Object;
	}): void;

	// dojo/data/util/simpleFetch
	fetch(keywordArgs: _DojoDataRequestArgs): DojoDataRequest;

	// Write
	deleteItem(item: Object): boolean;
	isDirty(item: Object): boolean;
	newItem(keywordArgs?: Object, parentInfo?: { parent: Object; attribute: string; }): Object;
	revert(): boolean;
	save(keywordArgs: {
		onComplete?: () => void;
		onError?: (error: Object) => void;
		scope?: Object;
	}): boolean;
	setValue(item: Object, attribute: string, value: any): boolean;
	setValues(item: Object, attribute: string, values: any[]): boolean;
	unsetAttribute(item: Object, attribute: string): boolean;

	// Notification
	onDelete(deletedItem: Object): void;
	onNew(newItem: Object, parentInfo?: {
		item: Object;
		attribute: string;
		oldValue: any;
		newValue: any;
	}): void;
	onFetch(results: Object): void;
	onSet(item: Object, attribute: string, oldValue: any, newValue: any): void;
}
declare module "dojo/data/ObjectStore"
{
	export = DojoDataObjectStore;
}

// dojo/data/util/simpleFetch

interface _DojoDataRequestArgs
{
	query?: any;
	queryOptions?: { ignoreCase?: boolean; deep?: boolean; };
	onBegin?: (size: number, request: DojoDataRequest) => void;
	onItem?: (item: any, request: DojoDataRequest) => void;
	onComplete?: (items: any[], request: DojoDataRequest) => void;
	onError?: (errorData: Object, request: DojoDataRequest) => void;
	scope?: Object;
	start?: number;
	count?: number;
	sort?: DojoDataSortingArgs[];
}
interface DojoDataUtilSimpleFetch
{
	fetch(keywordArgs: _DojoDataRequestArgs): DojoDataRequest;
}

// dojo/data/util/filter

interface DojoDataUtilFilter
{
	patternToRegExp(pattern: string, ignoreCase?: boolean): RegExp;
}

// dojo/data/util/sorter

interface DojoDataSortingArgs
{
	attribute: string;
	descending?: boolean;
}
interface DojoDataSortingFunction<T> { (a: T, b: T): number; }

interface DojoDataUtilSorter<T>
{
	basicComparator: DojoDataSortingFunction<T>;
	createSortFunction(sortSpec: DojoDataSortingArgs[], store: DojoDataStore): DojoDataSortingFunction<T>;
}
