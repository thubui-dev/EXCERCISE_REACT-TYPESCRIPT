// import { async } from "@firebase/util";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPerson } from "../../api/api";

export interface Person{
    id: number | string;
    name: string;
}

interface PersonState{
    persons: Person[];
}

const initialState: PersonState = {
   persons: [],
}

// Đầu tiên, tạo thunk
export const fetchPerson = createAsyncThunk("person/fetch", async() => {
    const data = await getPerson();
    console.log('data', data)
    return data;
})

// Tiếp thep xử lý các actions trong reducers.
export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers:{
       addPerson: (state, action: PayloadAction<{name: string}>) => {
        state.persons.push({
            id: state.persons.length,
            name: action.payload.name,
        })
       },
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchPerson.fulfilled,(state, action)=>{
            state.persons = action.payload
        })
    }
})

export default PersonSlice.reducer;
export const {addPerson}= PersonSlice.actions