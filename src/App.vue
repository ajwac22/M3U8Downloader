<script setup lang="ts">
import 'element-plus/es/components/message/style/css';
import { ElMessage } from 'element-plus';

const handleClick = () => {
  ElMessage.success('success');
};
</script>

<template>
  <div class="flex flex-container justify-center text-gray-700">
    electron app template
  </div>
  <div class="flex flex-container justify-center mt-2">
    <el-button type="primary" @click="handleClick">click me</el-button>
  </div>
</template>
