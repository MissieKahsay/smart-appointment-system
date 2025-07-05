provider "aws" {
  region = "us-east-2"
}

resource "aws_s3_bucket" "frontend" {
  bucket = "smart-appointment-frontend"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_dynamodb_table" "appointments" {
  name         = "Appointments"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "appointmentId"

  attribute {
    name = "appointmentId"
    type = "S"
  }
}
