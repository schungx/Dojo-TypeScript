/// <reference path="dojo.ts"/>

// dojo/data/api

interface DojoDataApiRequest extends DojoDataRequestArgs
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

	close(request: DojoDataApiRequest): void;
	containsValue(item: Object, attribute: string, value: any): boolean;
	fetchItemByIdentity(keywordArgs: {
		identity: Object;
		onItem?: (item: Object) => void;
		onError?: (error: Object) => void;
		scope?: Object;
	}): Object;
	filter(requestArgs: DojoDataRequestArgs, arrayOfItems: Object[], findCallback: (item: Object) => void ): void;
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
	fetch(keywordArgs: DojoDataRequestArgs): DojoDataApiRequest;
}
interface IDojoDataItemFileReadStore
{
	new (keywordParameters: {
		url?: string;
		data?: Object;
		typeMap?: Object;
	}): DojoDataItemFileReadStore;
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
interface IDojoDataItemFileWriteStore
{
	new (keywordParameters: {
		url?: string;
		data?: Object;
		typeMap?: Object;
	}): DojoDataItemFileWriteStore;
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
	objectStore: DojoStore;

	changing(object: Object, _deleting: boolean): void;

	// Read
	close(request: DojoDataApiRequest): void;
	containsValue(item: Object, attribute: string, value: any): boolean;
	fetchItemByIdentity(keywordArgs: {
		identity: Object;
		onItem?: (item: Object) => void;
		onError?: (error: Object) => void;
		scope?: Object;
	}): Object;
	filter(requestArgs: DojoDataRequestArgs, arrayOfItems: Object[], findCallback: (item: Object) => void ): void;
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
	fetch(keywordArgs: DojoDataRequestArgs): DojoDataApiRequest;

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
interface IDojoDataObjectStore
{
	new (keywordParameters: {
		url?: string;
		data?: Object;
		typeMap?: Object;
	}): DojoDataObjectStore;
}

// dojo/data/util/simpleFetch

interface DojoDataRequestArgs
{
	query?: any;
	queryOptions?: { ignoreCase?: boolean; deep?: boolean; };
	onBegin?: (size: number, request: DojoDataApiRequest) => void;
	onItem?: (item: any, request: DojoDataApiRequest) => void;
	onComplete?: (items: any[], request: DojoDataApiRequest) => void;
	onError?: (errorData: Object, request: DojoDataApiRequest) => void;
	scope?: Object;
	start?: number;
	count?: number;
	sort?: DojoDataSortingArgs[];
}
interface DojoDataUtilSimpleFetch
{
	fetch(keywordArgs: DojoDataRequestArgs): DojoDataApiRequest;
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
