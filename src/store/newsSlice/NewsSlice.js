import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";


export const getSelectNews = createAsyncThunk(
    "getSelectNews",
    async function(id,{dispatch,rejectWithValue}){
        try {
            const response= await fetch(`https://63f26f05f28929a9df5a8e2d.mockapi.io/news/articles/${id}`)
            if (response.status===200){
                const data = await response.json()
                return data
            }
        }catch (error){
            return rejectWithValue("ошибка")
        }
    }
)

export const newsSlice =createSlice({
    name:"newsSlice",
    initialState:{
        selectNew:{},
    },
    reducers:{

    }, extraReducers: builder => {
        builder.addCase(getSelectNews.fulfilled,(state, action)=>{
            state.selectNew = action.payload
        })
    }
})

export default newsSlice.reducer