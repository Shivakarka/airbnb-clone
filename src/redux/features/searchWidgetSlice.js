import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isWhereSelected: false,
    isCheckinSelected: false,
    isCheckoutSelected: false,
    isAddGuestSelected: false,
    showDatePicker: false,
    selectedDate: [null, null],
    adultCount: 0,
    childrenCount: 0,
    petCount: 0,
    infantCount: 0,
    outerClickEffect:false
};

const searchWidgetSlice = createSlice({
    name: "searchWidgetSlice",
    initialState,
    reducers: {
        setIsWhereSelected: (state) => {
            state.isWhereSelected = true;
            state.isCheckinSelected = false;
            state.isAddGuestSelected = false;
            state.isCheckoutSelected = false;
            state.showDatePicker = false;
            state.outerClickEffect = false
        },
        setIsCheckinSelected: (state) => {
            state.isCheckinSelected = true;
            state.isAddGuestSelected = false;
            state.isWhereSelected = false;
            state.isCheckoutSelected = false;
            state.showDatePicker = true;
            state.outerClickEffect = false
        },
        setIsCheckoutSelected: (state) => {
            state.isCheckinSelected = false;
            state.isAddGuestSelected = false;
            state.isWhereSelected = false;
            state.isCheckoutSelected = true;
            state.showDatePicker = true;
            state.outerClickEffect = false
        },
        setIsAddGuestSelected: (state) => {
            state.isCheckinSelected = false;
            state.isAddGuestSelected = true;
            state.isWhereSelected = false;
            state.isCheckoutSelected = false;
            state.showDatePicker = false;
            state.outerClickEffect = false
        },
        setCheckinSelectedDate: (state, action) => {
            state.outerClickEffect = false
            state.isCheckinSelected = false;
            state.isCheckoutSelected = true;
            state.selectedDate[0] = action.payload;

        },
        setCheckOutSelectedDate: (state, action) => {
            state.outerClickEffect = false
            state.isCheckinSelected = false;
            state.isCheckoutSelected = false;
            state.isAddGuestSelected=true;
            state.selectedDate[1] = action.payload;

        },
        clearSelectedDate: (state) => {
            state.outerClickEffect = false
            state.isCheckoutSelected = false;
            state.isCheckinSelected = true;
            state.selectedDate = [null, null];
        },
        resetAll: (state) => {
            state.isWhereSelected = false;
            state.isCheckinSelected = false;
            state.isAddGuestSelected = false;
            state.isCheckoutSelected = false;
            state.showDatePicker = false;
        },
        incrementAdultCount: (state) => {
            state.adultCount += 1;
        },
        decrementAdultCount: (state) => {
            if (state.adultCount === 0) {
                return;
            }
            state.adultCount -= 1;
        },
        incrementChildrenCount: (state) => {
            state.childrenCount += 1;
        },
        decrementChildrenCount: (state) => {
            if (state.childrenCount === 0) {
                return;
            }
            state.childrenCount -= 1;
        },
        incrementInfantCount: (state) => {
            state.infantCount += 1;
        },
        decrementInfantCount: (state) => {
            if (state.infantCount === 0) {
                return;
            }
            state.infantCount -= 1;
        },

        incrementPetCount: (state) => {
            state.petCount += 1;
        },
        decrementPetCount: (state) => {
            if (state.petCount === 0) {
                return;
            }
            state.petCount -= 1;
        },
        resetAllGuest:(state)=>{
            state.adultCount=0
            state.childrenCount=0
            state.infantCount=0
            state.petCount=0
        },
        setOuterClick:(state) => {

            state.outerClickEffect=true
            state.isWhereSelected=false
            state.isCheckinSelected = false;
            state.isAddGuestSelected = false;
            state.isCheckoutSelected = false;
        },
        disableOuterClick:(state) => {
            state.isCheckinSelected = false;
            state.isAddGuestSelected = false;
            state.isWhereSelected = false;
            state.isCheckoutSelected = false;
            state.showDatePicker = false;
            state.outerClickEffect=false
        }
    },
});

export const {
    setIsWhereSelected,
    setIsAddGuestSelected,
    setIsCheckinSelected,
    setIsCheckoutSelected,
    setCheckinSelectedDate,
    setCheckOutSelectedDate,
    clearSelectedDate,
    incrementAdultCount,
    decrementAdultCount,
    incrementChildrenCount,
    decrementChildrenCount,
    incrementInfantCount,
    decrementInfantCount,
    incrementPetCount,
    decrementPetCount,
    disableOuterClick,
    resetAllGuest,
    setOuterClick,
    resetAll,
} = searchWidgetSlice.actions;
export default searchWidgetSlice.reducer;
