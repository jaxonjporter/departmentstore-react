class Api::ReviewsController < ApplicationController
  before_action :set_item 
  
  def index
    render json: @item.reviews
  end

  def create
  end

  def update
  end

  def destroy
  end

  private 

  def set_item
      @item = Item.find(params[:item_id])
  end
end
