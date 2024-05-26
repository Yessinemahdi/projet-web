<?php
// create_post.php
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$title = $data['title'];
$content = $data['content'];
$category = $data['category'];
$user_id = $data['userId'];

$sql = "INSERT INTO posts (title, content, category, user_id) VALUES (:title, :content, :category, :user_id)";
$stmt = $pdo->prepare($sql);
$stmt->execute(['title' => $title, 'content' => $content, 'category' => $category, 'user_id' => $user_id]);

echo json_encode(['message' => 'Post created successfully']);
?>
