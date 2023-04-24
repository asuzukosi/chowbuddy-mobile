// Import react native components
import { View, Text, TouchableOpacity, Image  } from 'react-native'
import React, {useState} from 'react'

// Component that implements the categories grid section
export default function CategoriesGrid({naviation, setSearchCategory}) {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // This will set the style of the box based on whether it is the selected box
  const getBoxStyle = (id) => {
    // returns the style of the box based on whether it is selected or not
    if(id === selectedCategory){
        return "block rounded-xl border align-middle items-center border-indigo-500 bg-indigo-400 p-4 px-7 shadow-sm hover:border-indigo-200 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring ml-3 w-30"
    } else {
        return "block rounded-xl border align-middle items-center border-indigo-300 bg-indigo-100 p-4 px-7 shadow-sm hover:border-indigo-200 hover:ring-1 hover:ring-indigo-200 focus:outline-none focus:ring ml-3 w-30"
    }
  }

  // This sets the selected button to the ID fo the selected box
  const setSelectedCategoryWithButton = (id) => {
    // Function that is triggeerd when user clicks on a particular category box
    if(id === selectedCategory){
        setSelectedCategory(null)
        setSearchCategory(null)
    }else {
        setSelectedCategory(id)
        setSearchCategory(id)
    }

  }
  return (
    <View className="max-w-screen-xl ml-3 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <View className="grid flex-row grid-col-4 gap-5 sm:grid-cols-3">
            <TouchableOpacity className={getBoxStyle(2)} onPress={()=>{setSelectedCategoryWithButton(2)}}>
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/hamburger.png")}/>
                <Text className="mt-2 font-bold text-indigo-700">Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity className={getBoxStyle(1)} onPress={()=>{setSelectedCategoryWithButton(1)}}>
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/pizza.png")}/>
                <Text className="mt-2 font-bold text-indigo-700">Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity className={getBoxStyle(3)} onPress={()=>{setSelectedCategoryWithButton(3)}}>
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/barbecue.png")}/>
                <Text className="mt-2 font-bold text-indigo-700">BBQ</Text>
            </TouchableOpacity>
        </View>
        <View className="grid flex-row grid-col-4 gap-5 sm:grid-cols-3 mt-2">
            <TouchableOpacity className={getBoxStyle(4)} onPress={()=>{setSelectedCategoryWithButton(4)}}>
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/sushi.png")}/>
                <Text className="mt-2 font-bold text-indigo-700">Sushi</Text>
            </TouchableOpacity>
            <TouchableOpacity className={getBoxStyle(5)} onPress={()=>{setSelectedCategoryWithButton(5)}}>
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/avocado.png")}/>
                <Text className="mt-2 font-bold text-indigo-700">Vegan</Text>
            </TouchableOpacity>
            <TouchableOpacity className={getBoxStyle(6)} onPress={()=>{setSelectedCategoryWithButton(6)}}>
                <Image className="h-25 w-25" style={{ width: 25, height: 25 }} source={require("../assets/images/icons/cupcake.png")}/>
                <Text className="mt-2 font-bold text-indigo-700">Dessert</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}
