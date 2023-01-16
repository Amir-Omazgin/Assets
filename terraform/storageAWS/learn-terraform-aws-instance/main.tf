terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-west-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0ab48c28ccd191ec2"
  instance_type = "t3.micro"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}
