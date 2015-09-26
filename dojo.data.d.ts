/************************************************************************/
/* Define dojo/data package                                             */
/************************************************************************/

/// <reference path="dojo.d.ts"/>

declare module Dojo.Data
{
	interface Item<T> { }

	// dojo/data/api

	interface Request<T> extends RequestArgs<T>
	{
		abort(): void;
	}

	interface RequestArgs<T>
	{
		query?: any;
		queryOptions?: { ignoreCase?: boolean; deep?: boolean; };
		onBegin?: (size: number, request: Request<T>) => void;
		onItem?: (item: Item<T>, request: Request<T>) => void;
		onComplete?: (items: Item<T>[], request: Request<T>) => void;
		onError?: (errorData: any, request: Request<T>) => void;
		scope?: Object;
		start?: number;
		count?: number;
		sort?: SortingArgs[];
	}
	interface SortingArgs
	{
		attribute: string;
		descending?: boolean;
	}
	interface SortingFunction<T> { (a: T, b: T): number; }

	// dojo/data

	class Store<T> extends dojo.Evented
	{
	}

	// dojo/data/ItemFileReadStore

	class ItemFileReadStore<T> extends Store<T> implements Util.SimpleFetch<T>
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

		close(request: Request<T>): void;
		containsValue(item: Item<T>, attribute: string, value: T): boolean;
		fetchItemByIdentity(keywordArgs: {
			identity: any;
			onItem?: (item: Item<T>) => void;
			onError?: (error: any) => void;
			scope?: Object;
		}): Item<T>;
		filter(requestArgs: RequestArgs<T>, arrayOfItems: Item<T>[], findCallback: (item: Item<T>) => void): void;
		getAttributes(item: Item<T>): string[];
		getFeatures(): { [feature: string]: boolean; };
		getIdentity(item: Item<T>): any;
		getIdentityAttributes(item: Item<T>): string[];
		getLabel(item: Item<T>): string;
		getLabelAttributes(item: Item<T>): string[];
		getValue<V>(item: Item<T>, attribute: string, defaultValue?: V): V;
		getValues<V>(item: Item<T>, attribute: string): V[];
		hasAttribute(item: Item<T>, attribute: string): boolean;
		isItem(something: Object): boolean;
		isItemLoaded(something: Object): boolean;
		loadItem(keywordArgs: {
			item: Item<T>;
			onItem?: (item: Item<T>) => void;
			onError?: (error: any) => void;
			scope?: Object;
		}): void;

		// dojo/data/util/simpleFetch
		fetch(keywordArgs: RequestArgs<T>): Request<T>;
	}

	// dojo/data/ItemFileWriteStore

	class ItemFileWriteStore<T> extends ItemFileReadStore<T>
	{
		referenceIntegrity: boolean;

		deleteItem(item: Item<T>): boolean;
		isDirty(item: Item<T>): boolean;
		newItem<P>(keywordArgs?: Object, parentInfo?: { parent: Item<P>; attribute: string; }): Item<T>;
		revert(): boolean;
		save(keywordArgs: {
			onComplete?: () => void;
			onError?: (error: any) => void;
			scope?: Object;
		}): boolean;
		setValue<V>(item: Item<T>, attribute: string, value: V): boolean;
		setValues<V>(item: Item<T>, attribute: string, values: V[]): boolean;
		unsetAttribute(item: Item<T>, attribute: string): boolean;
	}

	// dojo/data/ObjectStore

	class ObjectStore<T> extends dojo.Evented implements Util.SimpleFetch<T>
	{
		constructor(keywordParameters: {
			url?: string;
			data?: Object;
			typeMap?: Object;
			objectStore?: Object;		// Should be Dojo.Store.Store, but needs to pull in dojo.store.d.ts, so don't do it
		});

		labelProperty: string;
		objectStore: Object;		// Should be Dojo.Store.Store, but needs to pull in dojo.store.d.ts, so don't do it

		changing(object: Object, _deleting: boolean): void;

		// Read
		close(request: Request<T>): void;
		containsValue(item: Item<T>, attribute: string, value: T): boolean;
		fetchItemByIdentity(keywordArgs: {
			identity: any;
			onItem?: (item: Item<T>) => void;
			onError?: (error: any) => void;
			scope?: Object;
		}): Item<T>;
		filter(requestArgs: RequestArgs<T>, arrayOfItems: Item<T>[], findCallback: (item: Item<T>) => void): void;
		getAttributes(item: Item<T>): string[];
		getFeatures(): { [feature: string]: boolean; };
		getIdentity(item: Item<T>): any;
		getIdentityAttributes(item: Item<T>): string[];
		getLabel(item: Item<T>): string;
		getLabelAttributes(item: Item<T>): string[];
		getValue<V>(item: Item<T>, attribute: string, defaultValue?: V): V;
		getValues<V>(item: Item<T>, attribute: string): V[];
		hasAttribute(item: Item<T>, attribute: string): boolean;
		isItem(something: Object): boolean;
		isItemLoaded(something: Object): boolean;
		loadItem(keywordArgs: {
			item: Item<T>;
			onItem?: (item: Item<T>) => void;
			onError?: (error: any) => void;
			scope?: Object;
		}): void;

		// dojo/data/util/simpleFetch
		fetch(keywordArgs: RequestArgs<T>): Request<T>;

		// Write
		deleteItem(item: Item<T>): boolean;
		isDirty(item: Item<T>): boolean;
		newItem<P>(keywordArgs?: Object, parentInfo?: { parent: Item<P>; attribute: string; }): Item<T>;
		revert(): boolean;
		save(keywordArgs: {
			onComplete?: () => void;
			onError?: (error: any) => void;
			scope?: Object;
		}): boolean;
		setValue<V>(item: Item<T>, attribute: string, value: V): boolean;
		setValues<V>(item: Item<T>, attribute: string, values: V[]): boolean;
		unsetAttribute(item: Item<T>, attribute: string): boolean;

		// Notification
		on(type: "Delete", listener: (deleteditem: Item<T>) => void): Dojo.RemovableHandle;
		on<P>(type: "New", listener: (newitem: Item<T>, parentInfo?: {
			item: Item<P>;
			attribute: string;
			oldValue: any;
			newValue: any;
		}) => void): Dojo.RemovableHandle;
		on(type: "Fetch", listener: (results: Object) => void): Dojo.RemovableHandle;
		on(type: "Set", listener: (item: Item<T>, attribute: string, oldValue: any, newValue: any) => void): Dojo.RemovableHandle;
		on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
		on(type: Dojo.ExtensionEvent, listener: Dojo.Action): Dojo.RemovableHandle;

		onDelete(deleteditem: Item<T>): void;
		onNew<P>(newitem: Item<T>, parentInfo?: {
			item: Item<P>;
			attribute: string;
			oldValue: any;
			newValue: any;
		}): void;
		onFetch(results: Object): void;
		onSet(item: Item<T>, attribute: string, oldValue: any, newValue: any): void;
	}

	module Util
	{
		// dojo/data/util/simpleFetch
		interface SimpleFetch<T>
		{
			fetch(keywordArgs: RequestArgs<T>): Request<T>;
		}

		// dojo/data/util/filter

		interface Filter
		{
			patternToRegExp(pattern: string, ignoreCase?: boolean): RegExp;
		}

		// dojo/data/util/sorter

		interface Sorter<T>
		{
			basicComparator: SortingFunction<T>;
			createSortFunction(sortSpec: SortingArgs[], store: Store<T>): SortingFunction<T>;
		}
	}
}

declare module "dojo/data/ItemFileReadStore"
{
	var ItemFileReadStore: typeof Dojo.Data.ItemFileReadStore;
	export = ItemFileReadStore;
}
declare module "dojo/data/ItemFileWriteStore"
{
	var ItemFileWriteStore: typeof Dojo.Data.ItemFileWriteStore;
	export = ItemFileWriteStore;
}
declare module "dojo/data/ObjectStore"
{
	var ObjectStore: typeof Dojo.Data.ObjectStore
	export = ObjectStore;
}