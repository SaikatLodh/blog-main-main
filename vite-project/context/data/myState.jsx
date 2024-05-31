import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

function MyState(props) {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }


    const [searchkey, setSearchkey] = useState('')
    const [loading, setloading] = useState(false);
    const [getAllBlog, setGetAllBlog] = useState([]);

    const getAllBlogs = () => {
        setloading(true)

        try {
            const q = query(
                collection(fireDB, "blogPost"),
                orderBy("time")
            )

            const data = onSnapshot(q, (QuerySnapshot) => {
                let blogArray = []
                QuerySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id })
                })

                setGetAllBlog(blogArray)
                return () => data;
            })
            return () => data;

        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }
    console.log(getAllBlog)
    useEffect(() => {
        getAllBlogs();
    }, []);
    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, getAllBlog, searchkey,
            setSearchkey, setloading
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState