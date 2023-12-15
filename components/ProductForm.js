
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
    _id,
    title: existingTite,
    description: existingDescription,
    price: existingPrice,
    images: existingImages,
    category: assignedCategory,
    properties: assignedProperties,

}) {
    const [title, setTitle] = useState(existingTite || '');
    const [images, setImages] = useState(existingImages || []);
    const [description, setDescription] = useState(existingDescription || '');
    const [category, setCategory] = useState(assignedCategory || '');
    const [productProperties, setProductProperties] = useState(assignedProperties || {});
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [categories, setCategories] = useState([]);

    const router = useRouter();
    useEffect(() => {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        })
    }, []);

    async function saveProduct(ev) {
        ev.preventDefault();
        const data = { title, description, price, images, category, properties: productProperties };
        if (_id) {
            //update
            await axios.put('/api/products', { ...data, _id });

        }
        else {
            //create
            await axios.post('/api/products', data);
        }
        setGoToProducts(true);
    }
    if (goToProducts) {
        router.push('/products');
    }
    async function uploadImages(ev) {
        const files = ev.target?.files;
        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files) {
                data.append('file', file);
            }

            const res = await axios.post('/api/upload', data);
            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false);
        }
    }
    function updateImagesOrder(images) {
        setImages(images);
    }

    function setProductProp(propName, value) {
        setProductProperties(prev => {
            const newProductProps = { ...prev };
            newProductProps[propName] = value;
            return newProductProps;
        });
    }

    const propertiesToFill = [];
    if (categories.length > 0 && category) {
        let catInfo = categories.find(({ _id }) => _id === category);
        if (catInfo) {
            propertiesToFill.push(...catInfo.properties);
            while (catInfo?.parent?._id) {
                const parentCat = categories.find(({ _id }) => _id === catInfo?.parent?._id);
                if (parentCat) {
                    propertiesToFill.push(...parentCat.properties);
                    catInfo = parentCat;
                } else {
                    // Break the loop if parent category not found
                    break;
                }
            }
        }
    }

    return (
        <form onSubmit={saveProduct}>
            <label>Product Name</label>
            <input
                type="text"
                placeholder="Product Name"
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            <label>Category</label>
            <select value={category} onChange={ev => setCategory(ev.target.value)}>
                <option value="">Uncategorized</option>
                {categories.length > 0 && categories.map(c => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                ))}
            </select>

            {/* {propertiesToFill.length>0 && propertiesToFill.map(p=>(
                <div className="flex gap-5">
                
                <div className="text-lg"><label>{p.name}</label></div>

                <select value={productProperties[p.name]}
                onChange={ev =>
                setProductProp(p.name, ev.target.value)
                }>
                    {p.values.map(
                        v=>(
                            <option value={v}>{v}</option>
                        ))}
                </select>
                </div>
            ))}
             */}
            {propertiesToFill.length > 0 &&
                propertiesToFill.map(p => (
                    <div key={p.name} className="">
                            <label>{p.name[0].toUpperCase()+p.name.substring(1)}</label>
                        <div>
                            <select
                                value={productProperties[p.name]}
                                onChange={(ev) => setProductProp(p.name, ev.target.value)}
                            >
                                {p.values.map((v) => (
                                    <option key={v} value={v}>
                                        {v}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}


            <label>Photos</label>
            <div className="m-2 flex flex-wrap gap-1">
                <ReactSortable list={images} className="flex flex-wrap gap-1" setList={updateImagesOrder}>

                    {!!images?.length && images.map(link => (
                        <div key={link} className="h-24 bg-white p-2 shadow-md rounded-sm border border-gray-200">
                            <img src={link} alt="Uploaded Image" className="rounded-lg" />
                        </div>
                    ))}

                </ReactSortable>


                {isUploading && (
                    <div className="h-24 p-3 flex items-center">
                        <Spinner />
                    </div>
                )}

                <label className="w-24 h-24 cursor-pointer text-center items-center justify-center text-sm gap-1 text-primary rounded-lg bg-white shadow-sm border border-primary flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>

                    <div>
                        Add image
                    </div>
                    <input type="file" onChange={uploadImages} className="hidden" />
                </label>
            </div>
            <label>Description</label>
            <textarea
                placeholder="Description"
                value={description}
                onChange={ev => setDescription(ev.target.value)}
            />

            <label>Price</label>
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={ev => setPrice(ev.target.value)}
            />
            <button type="submit"
                className="btn-primary">Save</button>
        </form>
    );
}