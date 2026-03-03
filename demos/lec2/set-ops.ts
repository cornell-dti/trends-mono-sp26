/**
 * Create a type called `Result`.
 * 
 * It must allow EITHER:
 * 1) A success object:
 *   {
 *     success: true;
 *     data: string;
 *   }
 * 
 * OR
 * 
 * 2) A failure object:
 *   {
 *     success: false;
 *     error: string;
 *   }
 */

type Success = {
    success: true;
    data: string;
}

type Failure = {
    success: false;
    error: string;
}

type Result = Success | Failure;


/** 
 * Create two types:
 * 
 * HasName, which has one attribute (a name that is a string)
 * 
 * Has Price, which has one attribute (a price that is a number)
 * 
 * Create a new type called `Product` that requires a name and a price.
*/

type HasName = {
    name: string
}

type HasPrice = {
    price: number
}

type Product = HasName & HasPrice;