/************************************************************************/
/* Define dojo/data package                                             */
/************************************************************************/

/// <reference path="dojo.d.ts"/>

declare module Dojo.Data
{
	// dojo/data/api

	export interface Request extends RequestArgs
	{
		abort(): void;
	}

	export interface RequestArgs
	{
		query?: any;
		queryOptions?: { ignoreCase?: boolean; deep?: boolean; };
		onBegin?: (size: number, request: Request) => void;
		onItem?: (item: any, request: Request) => void;
		onComplete?: (items: any[], request: Request) => void;
		onError?: (errorData: Object, request: Request) => void;
		scope?: Object;
		start?: number;
		count?: number;
		sort?: SortingArgs[];
	}
	export interface SortingArgs
	{
		attribute: string;
		descending?: boolean;
	}
	export interface SortingFunction<T> { (a: T, b: T): number; }

	// dojo/data

	class Store extends dojo.Evented
	{
	}

	// dojo/data/ItemFileReadStore

	class ItemFileReadStore extends Store implements Util.SimpleFetch
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

		close(request: Request): void;
		containsValue(item: Object, attribute: string, value: any): boolean;
		fetchItemByIdentity(keywordArgs: {
			identity: Object;
			onItem?: (item: Object) => void;
			onError?: (error: Object) => void;
			scope?: Object;
		}): Object;
		filter(requestArgs: RequestArgs, arrayOfItems: Object[], findCallback: (item: Object) => void ): void;
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
		fetch(keywordArgs: RequestArgs): Request;
	}

	// dojo/data/ItemFileWriteStore

	class ItemFileWriteStore extends ItemFileReadStore
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

	// dojo/data/ObjectStore

	class ObjectStore extends dojo.Evented implements Util.SimpleFetch
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
		close(request: Request): void;
		containsValue(item: Object, attribute: string, value: any): boolean;
		fetchItemByIdentity(keywordArgs: {
			identity: Object;
			onItem?: (item: Object) => void;
			onError?: (error: Object) => void;
			scope?: Object;
		}): Object;
		filter(requestArgs: RequestArgs, arrayOfItems: Object[], findCallback: (item: Object) => void ): void;
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
		fetch(keywordArgs: RequestArgs): Request;

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

	module Util
	{
		// dojo/data/util/simpleFetch
		export interface SimpleFetch
		{
			fetch(keywordArgs: RequestArgs): Request;
		}

		// dojo/data/util/filter

		export interface Filter
		{
			patternToRegExp(pattern: string, ignoreCase?: boolean): RegExp;
		}

		// dojo/data/util/sorter

		interface Sorter<T>
		{
			basicComparator: SortingFunction<T>;
			createSortFunction(sortSpec: SortingArgs[], store: Store): SortingFunction<T>;
		}
	}
}


declare module "dojo/data/ItemFileReadStore" 
{
	var ItemFileReadStore: Dojo.Data.ItemFileReadStore;
	export = ItemFileReadStore;
}
declare module "dojo/data/ItemFileWriteStore" 
{
	var ItemFileWriteStore: Dojo.Data.ItemFileWriteStore;
	export = ItemFileWriteStore;
}
declare module "dojo/data/ObjectStore" 
{
	var ObjectStore: Dojo.Data.ObjectStore
	export = ObjectStore;
}
