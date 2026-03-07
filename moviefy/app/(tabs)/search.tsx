import MovieCard from '@/components/movieCard';
import SearchBar from '@/components/searchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

const search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: movies, loading, error } = useFetch(() => fetchMovies({ query: '' }), false);

  return (
    <View className='flex-1 bg-primary '>
      <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard {...item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 20,
          marginVertical: 16
        }}
        contentContainerStyle={{
          paddingBottom: 100
        }}

        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image source={icons.logo} className='w-12 h-12 mb-2' />
            </View>

            <View className='flex justify-center items-center my-5'>
              <SearchBar onPress={()=>{}} placeholder='search movie...' />
            </View>

            {
              loading && <ActivityIndicator size={"large"} color={"#0000ff"} />
            }

            {error && (
              <Text className='text-red-500 px-5 my-5'>Error : {error.message}</Text>
            )}

            {!loading &&
              !error &&
              searchQuery.trim() &&
              movies?.length! > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search Results for{" "}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
            )}




          </>
        }


      />
    </View>
  )
}

export default search