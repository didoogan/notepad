from rest_framework import serializers

from category.models import Category

from article.serizlizers import ArticleSerializer


class CategorySerializer(serializers.ModelSerializer):
    articles_filtered_by_user = serializers.SerializerMethodField('get_articles')

    class Meta:
        model = Category
        fields = '__all__'

    def get_articles(self, obj):
        user = self.context.get('request').user
        articles = obj.articles.filter(user=user)
        serializer = ArticleSerializer(articles, many=True)
        return serializer.data


class SimpleCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'
