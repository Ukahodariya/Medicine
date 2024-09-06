import { v4 as uuidv4 } from 'uuid';
import { FaChevronDown } from "react-icons/fa";
import Imgone from '../assets/image/medicine-one.webp';
import Imgtwo from '../assets/image/medicine-two.webp';
import Imgthree from '../assets/image/medicine-three.webp';
import Imgfour from '../assets/image/medicine-four.webp';
import Imgfive from '../assets/image/medicine-five.webp';
import Serviceone from '../assets/image/services-six.svg';
import Servicetwo from '../assets/image/services-seven.svg';
import Servicethree from '../assets/image/services-eight.svg';
import Servicefour from '../assets/image/services-nine.svg';

const categoryApi = [
    {
        category: 'Medicine',
        path: 'Medicine',
        micon: FaChevronDown,
        medicineDetails: [
            {
                Diabetes: [
                    {
                        ObjectId : uuidv4(),
                        title: "Sri Sri Tattva Mehantaka Vati 1000mg Tablet | For Blood Sugar Control",
                        image: Imgone,
                        quantity: "bottle of 60 tablets",
                        price: 400,
                        mrp: 500,
                        discount: "20% OFF"
                    },
                    {
                        title: "Pintola Classic Peanut Butter American Recipe Crunchy",
                        image: Imgtwo,
                        quantity: "bottle of 60 tablets",
                        price: 400,
                        mrp: 500,
                        discount: "20% OFF"
                    },
                    {
                        title: "Macprot DM with CoQ10, Vitamins & Minerals for Diabetics | Flavour Powder Vanilla",
                        image: Imgthree,
                        quantity: "bottle of 60 tablets",
                        price: 400,
                        mrp: 500,
                        discount: "20% OFF"
                    },
                    {
                        title: "Dr Morepen Gluco One BG 03 Blood Glucose Test Strip (Only Strips) | Diabetes Monitoring",
                        image: Imgfour,
                        quantity: "bottle of 60 tablets",
                        price: 400,
                        mrp: 500,
                        discount: "20% OFF"
                    },
                    {
                        title: "OneTouch Select Plus Test Strip (Only Strips) Test Strip Green",
                        image: Imgfive,
                        quantity: "bottle of 60 tablets",
                        price: 400,
                        mrp: 500,
                        discount: "20% OFF"
                    }

                ],
                
            },
            // {
            //     heart: [
            //         {
            //             title: "Sri Sri Tattva Mehantaka Vati 1000mg Tablet | For Blood Sugar Control",
            //             image: Imgone,
            //             quantity: "bottle of 60 tablets",
            //             price: 400,
            //             mrp: 500,
            //             discount: "20% OFF"
            //         },
            //         {
            //             title: "Pintola Classic Peanut Butter American Recipe Crunchy",
            //             image: Imgtwo,
            //             quantity: "bottle of 60 tablets",
            //             price: 400,
            //             mrp: 500,
            //             discount: "20% OFF"
            //         },
            //         {
            //             title: "Macprot DM with CoQ10, Vitamins & Minerals for Diabetics | Flavour Powder Vanilla",
            //             image: Imgthree,
            //             quantity: "bottle of 60 tablets",
            //             price: 400,
            //             mrp: 500,
            //             discount: "20% OFF"
            //         },
            //         {
            //             title: "Dr Morepen Gluco One BG 03 Blood Glucose Test Strip (Only Strips) | Diabetes Monitoring",
            //             image: Imgfour,
            //             quantity: "bottle of 60 tablets",
            //             price: 400,
            //             mrp: 500,
            //             discount: "20% OFF"
            //         },
            //         {
            //             title: "OneTouch Select Plus Test Strip (Only Strips) Test Strip Green",
            //             image: Imgfive,
            //             quantity: "bottle of 60 tablets",
            //             price: 400,
            //             mrp: 500,
            //             discount: "20% OFF"
            //         }

            //     ],
                
            // }
        ]

    },
    {
        category: 'Healthcare',
        path: 'Healthcare',
        micon: FaChevronDown,
        product: []
    },
    {
        category: 'Lab Tests',
        path: 'LabTests',
        micon: FaChevronDown,
        product: []
    },
    {
        category: 'Canncer Care',
        path: 'CanncerCare',
        micon: FaChevronDown,
        product: []
    },
    {
        category: 'Partnerships',
        path: 'Partnerships',
        product: []
    },
    {
        element:'services',
        product:[
            {
                img: Serviceone,
                title:"100% Safe & Secure",
                desc:"We take all safety and hygiene measures to keep our customers safe."
            },
            {
                img: Servicetwo,
                title:"Click and Pick",
                desc:"Click to buy a range of products across categories"
            },
            {
                img: Servicethree,
                title:"Home Delivery",
                desc:"We offer convenient home delivery of medicines & general goods"
            },
            {
                img: Servicefour,
                title:"Unlimited Health Records",
                desc:"Save all your health records (Medical Records...)"
            }
        ]
    }
];



export default categoryApi;

