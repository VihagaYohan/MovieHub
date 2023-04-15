import React, {
  Component,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import {StyleSheet, View, Text, ViewStyle, FlatList, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IMAGE_URL} from '@env';

// components
import {
  UICard,
  UIContainer,
  UILoader,
  UITextView,
  UIImageView,
  UITagline,
  UIRating,
} from '../components';

// constants
import {COLORS, CONSTANTS, STYLES, UTILS} from '../constants';

// services
import {getTopMovies} from '../services/movies/MoviesService';

// models
import {Movie, ErrorResponse} from '../models';

// widgets
import UIImageWithRating from '../widgets/UIImageWithRating';

const HomeScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any, any>;
}) => {
  // navigation properties
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Top Rated Movies',
      headerTitleAlign: 'center',
    });
  });

  // states
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    _fetchMovies();
  }, []);

  // fetch movies
  const _fetchMovies = async (pageNumber: number = 1) => {
    try {
      let response = await getTopMovies(pageNumber);
      if (response?.isSuccess) {
        const {results} = response.result;

        setMovies([...movies, ...results]);
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // render UI
  const RenderContent = () => {
    return (
      <FlatList
        data={movies}
        keyExtractor={(item, index) => `movies-${index}`}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />
    );
  };

  const RenderItem = ({item, index}) => {
    return (
      <UICard containerStyle={styles.itemContainer}>
        <UIImageWithRating
          path={`${IMAGE_URL}${item.backdrop_path}`}
          popularity={item.popularity >= 100 ? 100 :  Math.round(item.popularity)}
        />

        <View style={styles.itemContentContainer}>
          <UITextView
            text={`#${index + 1} ${item.original_title}`}
            textStyle={styles.itemTitle}
            numberOfLines={2}
          />

          <UITextView
            text={`(${item.title})`}
            textStyle={styles.subTitle}
            numberOfLines={2}
          />

          <UITagline
            date={item.release_date}
            language={item.original_language}
            adult={item.adult}
          />

          <UITextView
            text={item.overview.length > 0 ? item.overview : 'Not found'}
            textStyle={styles.overview}
            numberOfLines={4}
          />
        </View>
      </UICard>
    );
  };

  return (
    <UIContainer>
      <View style={{flex: 1}}>
        {loading && <UILoader />}

        {!loading && <RenderContent />}
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: UTILS.RNSize(20),
    paddingBottom: UTILS.RNSize(27),
    paddingHorizontal: UTILS.RNSize(10),
  },
  itemContentContainer: {flex: 1, marginLeft: 10, paddingVertical: 15},
  itemTitle: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: COLORS.grey.grey800,
    fontStyle: 'italic',
    marginVertical: 5,
  },
  overview: {
    color: COLORS.grey.grey500,
  },
});

export default HomeScreen;
