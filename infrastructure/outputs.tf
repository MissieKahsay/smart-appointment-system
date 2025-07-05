output "frontend_bucket" {
  value = aws_s3_bucket.frontend.bucket
}

output "appointments_table" {
  value = aws_dynamodb_table.appointments.name
}
