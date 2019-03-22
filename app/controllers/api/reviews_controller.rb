class Api::ReviewsController < ApplicationController
  before_action :set_item 
  before_action :set_review, only: [:update, :destroy]
  
  def index
    render json: @item.reviews
  end

  def create
    review = @item.review.new(review_params)
    if review.save
      render json: review
    else
      render json: review.errors, status: 422
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: 422
    end
  end

  def destroy
    @review.destroy
  end

  private 

  def set_item
      @item = Item.find(params[:item_id])
  end

  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:title, :body, :author, :rating)
  end

end
