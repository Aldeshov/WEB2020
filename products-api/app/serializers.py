from rest_framework import serializers

from app.models import Category


class CategorySerializer(serializers.Serializer):
    id = serializers.CharField()
    name = serializers.CharField()
    link = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(id=validated_data.get('id'), name=validated_data.get('name'), link=validated_data.get('link'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.link = validated_data.get('link')
        instance.save()
        return instance
