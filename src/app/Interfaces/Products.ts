export interface Attribute{
    id:string,
    name:string,
    values:[{
        name:string | null
    }]
}

export interface Picture{
    id:string,
    url:string,
    secure_url:string    
}

export interface ProductDetails{
    id:string,
    title:string,
    condition:string,
    thumbnail:string,
    category_id?:string,
    price:number,
    original_price:number,
    pictures:Picture[]
    available_quantity:number,
    sold_quantity:number,
    attributes:Attribute[],
    warranty:string
    seller_address:{
        [k:string]:{} | number
    }
}

export interface ProductDescription{
    plain_text:string,
    last_updated:string,
    date_created:string
}

export interface Product extends ProductDetails, ProductDescription{}


export interface SearchResults{
    id:string,
    title:string,
    condition:string,
    permalink:string,
    thumbnail:string,
    price:number,
    sold_quantity:number,
    avaliable_quantity:number,
}

export interface SearchResponse{
    site_id:string,
    query:string,
    paging:{
        total:number,
        primary_results:number,
        offset:number,
        limit:number
    },
    results:SearchResults[],
    
}
