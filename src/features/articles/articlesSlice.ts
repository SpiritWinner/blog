import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  comments: string[];
  image: string;
}

interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [
    {
        id: 1,
        title: 'Путешествие в горы',
        description: 'Краткое описание путешествия в горы',
        content: 'Полный текст о захватывающем путешествии в горы, где можно насладиться природой и отдохнуть от городской суеты...',
        comments: ['Здорово!', 'Хочу туда поехать!'],
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/4636135/pub_602c28e0ae93e667d247bd76_602c29442ca49f5948dbde91/scale_1200'
      },
      {
        id: 2,
        title: 'Как научиться программировать',
        description: 'Краткое руководство по изучению программирования',
        content: 'Полный текст статьи, описывающий шаги и ресурсы, которые помогут вам начать изучение программирования с нуля...',
        comments: ['Очень полезная статья!', 'Спасибо за советы!'],
        image: 'https://media.proglib.io/posts/2019/10/14/8baf65df67fe6b35d0bee0184a0e5358.jpg'
      },
      {
        id: 3,
        title: 'Лучшие рецепты летних коктейлей',
        description: 'Освежающие рецепты для жаркого лета',
        content: 'Полный текст с описанием лучших рецептов летних коктейлей, которые помогут вам охладиться и насладиться вкусом свежих фруктов...',
        comments: ['Отличные рецепты!', 'Мой любимый - мохито!'],
        image: 'https://blog.metro.ua/wp-content/uploads/2019/05/Depositphotos_152761206_xl-2015-1-min.jpg'
      },
      {
        id: 4,
        title: 'История Древнего Рима',
        description: 'Краткий обзор истории Древнего Рима',
        content: 'Полный текст статьи, погружающий читателя в историю Древнего Рима, его величие и падение...',
        comments: ['Очень интересно!', 'Люблю историю Рима!'],
        image: 'https://i.ytimg.com/vi/3hVz713AcQg/maxresdefault.jpg'
      },
      {
        id: 5,
        title: 'Советы по уходу за комнатными растениями',
        description: 'Полезные советы для любителей комнатных растений',
        content: 'Полный текст статьи с советами по уходу за комнатными растениями, чтобы они радовали вас круглый год...',
        comments: ['Теперь мои растения всегда будут здоровы!', 'Отличные советы, спасибо!'],
        image: 'https://8b08ab88-ee1b-4b04-9ae9-321e0da71ae2.selcdn.net/ab624f11-9832-46b7-9804-a99d4f1bd365/shutterstock1975162334w500.jpg'
      }
  ]
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
      addComment: (state, action: PayloadAction<{ articleId: number, comment: string }>) => {
        const { articleId, comment } = action.payload;
        const article = state.articles.find(article => article.id === articleId);
        if (article) {
          article.comments.push(comment);
        }
      },
      addArticle: (state, action: PayloadAction<Article>) => {
        state.articles.push(action.payload);
      }
    }
  });
  
  export const { addComment, addArticle } = articlesSlice.actions;
  export const selectArticles = (state: { articles: ArticlesState }) => state.articles.articles;
  
  export default articlesSlice.reducer;
