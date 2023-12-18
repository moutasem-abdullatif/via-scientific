#!/bin/bash
echo "127.0.0.1 x.xyz.test" | sudo tee -a /etc/hosts
echo "127.0.0.1 y.xyz.test" | sudo tee -a /etc/hosts