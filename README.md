Write an application to Review Restaurants

Implement 3 roles with different permission levels
    * Regular User: Can rate and leave a comment for a restaurant
    * Owner: Can create restaurants and reply comments about owned restaurants
    * Admin: Can edit/delete all users, restaurants, comments, and reviews
Reviews should have:
    * A 5 star based rate
    * Date of the visit
    * Comment
When a Regular User logs in he will see a Restaurant List ordered by Rate Average
When an Owner logs in he will see a Restaurant List only the ones owned by him, and the reviews pending to reply
Owners can reply the review once
Restaurants detailed view should have:
    * The overall average rating
    * The highest rated review
    * The lowest rated review
    * Last reviews with rate, comment, and reply
Restaurant List can be filtered by Rating
