import React, {
  Component,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  FlatList,
  Image,
  RefreshControl,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
import {COLORS, CONSTANTS, DIMENSIONS, STYLES, UTILS} from '../constants';

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
  const [errorMessage, setErrorMessage] = useState<string>(
    'Unable to retrive the movies. Please try again',
  );
  const [page, setPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

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
        setErrorMessage('Unable to retrieve movies');
      }
    } catch (e) {
      setErrorMessage('');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // retry
  const _retry = () => {
    setVisible(false);
    _fetchMovies();
  };

  // on refresh
  const _onRefresh = () => {
    setPage(page + 1);
    setRefreshing(true);
    setTimeout(() => {
      _fetchMovies();
    }, 1500);
  };

  // render UI
  const RenderContent = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
        }
        data={movies}
        keyExtractor={(item, index) => `movies-${index}`}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
        contentContainerStyle={{
          paddingHorizontal: DIMENSIONS.PADDING,
          paddingVertical: DIMENSIONS.PADDING,
          minHeight: '100%',
        }}
      />
    );
  };

  const RenderItem = ({item, index}) => {
    return (
      <UICard containerStyle={styles.itemContainer}>
        <UIImageWithRating
          path={`${IMAGE_URL}${item.backdrop_path}`}
          popularity={
            item.popularity >= 100 ? 100 : Math.round(item.popularity)
          }
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

  const RenderFooter = () => {
    return <UILoader size="small" parentStyle={{marginBottom: 10}} />;
  };

  return (
    <UIContainer>
      <View style={{flex: 1}}>
        {loading && <UILoader />}

        {!loading && <RenderContent />}
      </View>

      <Modal visible={visible} animationType="slide">
        <View
          style={styles.modalContainer}>
          <View
            style={styles.errorMessasgeContainer}>
            <UITextView
              text={errorMessage}
              textStyle={styles.errorMessage}
            />

            <TouchableOpacity
              style={styles.retryButtonContainer}
              onPress={() => _retry()}>
              <UITextView
                text="Retry"
                textStyle={styles.retryButtonText}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 27,
    paddingHorizontal: 10,
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
  modalContainer:{
    backgroundColor: '#272727',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessasgeContainer:{
    backgroundColor: COLORS.white,
    paddingHorizontal: DIMENSIONS.PADDING,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: DIMENSIONS.PADDING,
  },
  errorMessage:{
    color: COLORS.grey.grey600,
    fontSize: 20,
    textAlign: 'center',
  },
  retryButtonContainer:{
    marginVertical: 10,
    backgroundColor: COLORS.red.red900,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: CONSTANTS.RADIUS,
  },
  retryButtonText:{
    color: COLORS.white,
    fontSize: 20,
  }
});

export default HomeScreen;
