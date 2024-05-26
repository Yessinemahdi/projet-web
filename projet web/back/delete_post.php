<?php
// delete_post.php
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$user_id = $data['userId'];

$sql = "DELETE FROM posts WHERE id = :id AND user_id = :user_id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id, 'user_id' => $user_id]);

echo json_encode(['message' => 'Post deleted successfully']);
?>
