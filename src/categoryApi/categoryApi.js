import { FaChevronDown } from "react-icons/fa";
import Imgone from '../assets/image/medicine-one.webp';
import Imgtwo from '../assets/image/medicine-two.webp';
import Imgthree from '../assets/image/medicine-three.webp';

const categoryApi = [
    {
        category: 'Medicine',
        path: 'Medicine',
        micon: FaChevronDown,
        medicineDetails : [
            {
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
                image: Imgtwo,
                quantity: "bottle of 60 tablets",
                price: 400,
                mrp: 500,
                discount: "20% OFF"
            },
            {
                title: "OneTouch Select Plus Test Strip (Only Strips) Test Strip Green",
                image: Imgone,
                quantity: "bottle of 60 tablets",
                price: 400,
                mrp: 500,
                discount: "20% OFF"
            }
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
];

export default categoryApi;